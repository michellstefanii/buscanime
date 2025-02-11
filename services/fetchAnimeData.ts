export async function fetchAnimeData(
  category: string,
  searchQuery: string,
  page: number
): Promise<AnimeProps[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/anilist?category=${category}&search=${searchQuery}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  return response.json();
}
