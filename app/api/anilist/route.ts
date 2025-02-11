import { NextResponse } from "next/server";
import { cache } from "react";

const fetchAnime = cache(
  async (category: string, search: string, page: number) => {
    const query = `
    query ($format: MediaFormat, $search: String, $page: Int) {
      Page(page: $page, perPage: 12) {
        media(type: ANIME, format: $format, search: $search, sort: POPULARITY_DESC) {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            large
          }
          genres
          averageScore
        }
      }
    }
  `;

    const variables: any = { page };
    if (category !== "ALL") variables.format = category;
    if (search) variables.search = search;

    try {
      const response = await fetch(`${process.env.NEXT_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 300 },
      });

      const data = await response.json();

      if (!response.ok || !data.data) {
        throw new Error("Error fetching data from AniList API.");
      }

      return data.data.Page.media;
    } catch (error) {
      console.error("Error searching for anime:", error);
      return null;
    }
  }
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "ALL";
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const animeData = await fetchAnime(category, search, page);

  if (!animeData) {
    return NextResponse.json(
      { error: "Error searching for anime or request limit exceeded." },
      { status: 500 }
    );
  }

  return NextResponse.json(animeData);
}
