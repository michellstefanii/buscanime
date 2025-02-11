import { useState, useEffect } from "react";
import { fetchAnimeData } from "@/services/fetchAnimeData";
import { useAnimeStore } from "@/store/useAnimeStore";

export function useAnimeLoader(): UseAnimeLoaderReturn {
  const { selectedCategory, searchQuery, page, setPage } = useAnimeStore();

  const [animes, setAnimes] = useState<AnimeProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [emptyResult, setEmptyResult] = useState(false);

  useEffect(() => {
    setAnimes([]);
    loadAnimes();
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    if (page != 1) {
      loadAnimes();
    }
  }, [page]);

  async function loadAnimes() {
    if (loading) return;
    setLoading(true);

    try {
      const pageAnimes = await fetchAnimeData(
        selectedCategory,
        searchQuery,
        page
      );

      setEmptyResult(pageAnimes.length === 0);

      setAnimes((prev) => [
        ...prev,
        ...pageAnimes.filter(
          (anime: AnimeProps) => !prev.some((a) => a.id === anime.id)
        ),
      ]);
    } catch (error) {
      setEmptyResult(true);
    } finally {
      setLoading(false);
    }
  }

  function loadNextPage() {
    if (!loading) {
      setPage(page + 1);
    }
  }

  return { animes, loading, emptyResult, loadNextPage };
}
