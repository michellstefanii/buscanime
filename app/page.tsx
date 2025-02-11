import { AnimeGrid } from "@/components/anime/animeGrid";
import { FilterButtons } from "@/components/filterButtons";
import { Search } from "@/components/search";
import { fetchAnimeCategories } from "@/services/fetchAnimeCategories";


export default async function HomePage() {
  const filters = await fetchAnimeCategories();

  return (
    <>
      <FilterButtons filters={filters} />
      <Search />
      <AnimeGrid />
    </>
  );
}
