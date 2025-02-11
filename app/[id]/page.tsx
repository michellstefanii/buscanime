"use client";

import { AnimeDetailsView } from "@/components/anime/animeDetailsView";
import Spinner from "@/components/spinner";
import { useAnimeDetails } from "@/hooks/useAnimeDetails";

export default function AnimeDetailsPage() {
  const { anime, loading, goBack } = useAnimeDetails();

  if (loading)
    return (
      <div className="mt-40 flex-grow">
        <Spinner />
      </div>
    );

  if (!anime) return <p className="text-center">Anime not found.</p>;

  return <AnimeDetailsView anime={anime} goBack={goBack} />;
}
