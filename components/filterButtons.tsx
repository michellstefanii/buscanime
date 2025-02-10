"use client";
import { useAnimeStore } from "@/store/useAnimeStore";

export function FilterButtons({ filters }: { filters: Category[] }) {
  const { selectedCategory, setSelectedCategory } = useAnimeStore();

  return (
    <div className="mb-4 flex justify-center flex-wrap gap-2 md:gap-5">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setSelectedCategory(filter.value)}
          className={`h-8 rounded-md px-4 text-sm flex items-center ${
            selectedCategory === filter.value
              ? "bg-primary text-white"
              : "border border-primary text-primary hover:bg-primary hover:text-white"
          }`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
}
