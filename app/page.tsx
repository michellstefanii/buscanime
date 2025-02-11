import { AnimeGrid } from "@/components/anime/animeGrid";
import { FilterButtons } from "@/components/filterButtons";
import { Search } from "@/components/search";

export default async function HomePage() {
  return (
    <>
      <FilterButtons />
      <Search />
      <AnimeGrid />
    </>
  );
}
