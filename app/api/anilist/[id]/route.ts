import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const paramsParsed = await params;

  if (!paramsParsed?.id) {
    return NextResponse.json({ error: "ID not found" }, { status: 400 });
  }

  const id = parseInt(paramsParsed.id, 10);

  const query = `
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        description
        coverImage {
          large
        }
        bannerImage
        genres
        averageScore
        episodes
        status
      }
    }
  `;

  try {
    const response = await fetch(`${process.env.NEXT_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables: { id } }),
      next: { revalidate: 300 },
    });

    const data = await response.json();

    if (!response.ok || !data.data) {
      throw new Error("Error fetching anime details.");
    }

    return NextResponse.json(data.data.Media);
  } catch (error) {
    console.error("Error searching for anime:", error);
    return NextResponse.json(
      { error: "Error fetching anime details." },
      { status: 500 }
    );
  }
}
