export const mockAnimeList: AnimeProps[] = [
  {
    id: 1,
    title: {
      romaji: "Naruto",
      english: "Naruto",
      native: "ナルト",
    },
    coverImage: {
      large: "https://example.com/naruto-cover.jpg",
    },
    image: "https://example.com/naruto.jpg",
    genres: ["Action", "Adventure"],
    rating: 90,
    averageScore: 85,
  },
  {
    id: 2,
    title: {
      romaji: "One Piece",
      english: "One Piece",
      native: "ワンピース",
    },
    coverImage: {
      large: "https://example.com/onepiece-cover.jpg",
    },
    image: "https://example.com/onepiece.jpg",
    genres: ["Action", "Adventure"],
    rating: 95,
    averageScore: 92,
  },
];

export const mockAnimeData: Anime = {
  id: 1,
  title: { english: "Naruto", romaji: "Naruto" },
  image: "",
  genres: ["genre"],
  rating: 90,
  coverImage: {
    large: "",
  },
  description: "",
  status: "",
  averageScore: 0,
};
