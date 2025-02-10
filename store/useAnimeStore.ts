import { create } from "zustand";

export const useAnimeStore = create<AnimeStore>((set) => ({
  selectedCategory: "ALL",
  searchQuery: "",
  page: 1,
  setSelectedCategory: (category) =>
    set({
      selectedCategory: category,
      searchQuery: "",
      page: 1,
    }),
  setSearchQuery: (query) =>
    set({
      searchQuery: query,
      page: 1,
    }),
  setPage: (page) => set({ page }),
}));
