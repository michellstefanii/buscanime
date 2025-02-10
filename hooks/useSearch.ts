import { useEffect, useState } from "react";
import { useAnimeStore } from "@/store/useAnimeStore";

export function useSearch(): UseSearchReturn {
  const { setSearchQuery, selectedCategory, searchQuery } = useAnimeStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm("");
  }, [selectedCategory]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setSearchTerm(searchQuery);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  return { searchTerm, setSearchTerm, handleSearch };
}
