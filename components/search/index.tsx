"use client";
import { useSearch } from "@/hooks/useSearch";
import { SearchInput } from "./searchInput";
import { SearchButton } from "./searchButton";

export function Search() {
  const { searchTerm, setSearchTerm, handleSearch } = useSearch();

  return (
    <div className="mb-6 lg:mx-16 flex gap-3 justify-center items-center">
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={handleSearch} />
    </div>
  );
}
