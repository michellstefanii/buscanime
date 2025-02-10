"use client";

import { AnimeCard } from "./animeCard";
import { SkeletonCard } from "@/components/skeletonCard";
import { LoadMoreButton } from "@/components/loadMoreButton";
import { useAnimeLoader } from "@/hooks/useAnimeLoader";
import { getShortTitleFormated } from "@/utils/helpers";

export function AnimeGrid() {
  const { animes, loading, emptyResult, loadNextPage } = useAnimeLoader();

  return (
    <>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-[1318px] mx-auto">
        {loading && animes.length === 0
          ? Array.from({ length: 12 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : animes.map((anime) => (
              <AnimeCard
                key={anime.id}
                id={anime.id}
                title={getShortTitleFormated(anime.title)}
                image={anime.coverImage.large}
                genres={anime.genres}
                rating={anime.averageScore}
              />
            ))}
      </div>

      {emptyResult && !loading && (
        <p className="mt-6 text-gray-500 text-lg text-center">
          Nenhum anime encontrado.
        </p>
      )}

      {!emptyResult && animes.length > 0 && (
        <LoadMoreButton loading={loading} onClick={loadNextPage} />
      )}
    </>
  );
}
