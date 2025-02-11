export async function fetchAnimeById(id: string): Promise<Anime> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/anilist/${id}`
  );

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  return response.json();
}
