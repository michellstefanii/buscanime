"use client";
import { fetchAnimeCategories } from "@/services/fetchAnimeCategories";
import { useAnimeStore } from "@/store/useAnimeStore";
import { useEffect, useState } from "react";

export function FilterButtons() {
  const { selectedCategory, setSelectedCategory } = useAnimeStore();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchAnimeCategories();
      setCategories(data);
    };

    loadCategories();
  }, []);

  return (
    <div className="mb-4 flex justify-center flex-wrap gap-2 md:gap-5">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => setSelectedCategory(category.value)}
          className={`h-8 rounded-md px-4 text-sm flex items-center ${
            selectedCategory === category.value
              ? "bg-primary text-white"
              : "border border-primary text-primary hover:bg-primary hover:text-white"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
