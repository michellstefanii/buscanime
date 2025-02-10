export async function fetchAnimeById(id: string): Promise<AnimeCardProps> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/anilist/${id}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados");
  }

  return response.json();
}
