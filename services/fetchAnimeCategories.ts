export async function fetchAnimeCategories(): Promise<Category[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/anilist/categories`
  );

  if (!response.ok) {
    throw new Error("Error fetching category data");
  }

  return response.json();
}
