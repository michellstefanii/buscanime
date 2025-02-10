import { getRatingColor } from "@/utils/helpers";
import { useRouter } from "next/navigation";

export function AnimeCard({
  title,
  image,
  genres,
  rating,
  id,
}: AnimeCardProps) {
  const router = useRouter();

  return (
    <div
      className="group relative w-full lg:max-w-[317px] h-[270px] rounded-lg overflow-hidden cursor-pointer"
      onClick={() => router.push(`/${id}`)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent rounded-lg">
        <div className="absolute top-2 left-2 p-4">
          <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>

          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <span
                key={genre}
                className="rounded bg-primary-light h-[22px] font-light px-2 flex items-center text-xs text-gray-light"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`absolute flex justify-center items-center h-[37px] w-[68px] font-normal right-2 bottom-2 rounded text-2xl text-gray-light ${getRatingColor(
            rating
          )}`}
        >
          {rating}%
        </div>
      </div>
    </div>
  );
}
