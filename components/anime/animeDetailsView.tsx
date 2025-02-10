import { formatAnimeTitle } from "@/utils/helpers";
import Image from "next/image";

export function AnimeDetailsView({
  anime,
  goBack,
}: {
  anime: Anime;
  goBack: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto p-7">
      <button
        onClick={goBack}
        className="bg-primary text-white px-4 h-10 rounded-md fixed z-10"
      >
        VOLTAR
      </button>
      <div className="flex flex-col mt-8">
        <div className="flex gap-4 items-center mb-2">
          <Image
            src={anime.coverImage.large}
            alt={anime.title.romaji}
            width={200}
            height={300}
            className="rounded-lg shadow-lg mt-4"
          />
          <div>
            <h1 className="text-2xl font-bold mt-4">
              {formatAnimeTitle(anime.title)}
            </h1>
            <p className="text-gray-500 text-sm">{anime.genres.join(", ")}</p>
          </div>
        </div>
        <p
          className="mt-2 text-gray-700 text-xl"
          dangerouslySetInnerHTML={{ __html: anime.description }}
        />
        {anime.bannerImage && (
          <div
            className="w-full h-56 bg-cover bg-center rounded-lg mt-2"
            style={{ backgroundImage: `url(${anime.bannerImage})` }}
          />
        )}
        <p className="mt-4 font-semibold">
          Episodes: {anime.episodes || "N/A"} | Status: {anime.status}
        </p>
        <p className="text-warning font-semibold">
          Score: {anime.averageScore}%
        </p>
      </div>
    </div>
  );
}
