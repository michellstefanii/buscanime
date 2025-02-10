export async function fetchAnimeCategories(): Promise<Category[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/anilist/categories`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da categoria");
  }

  return response.json();
}
