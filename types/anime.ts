interface Anime {
  id: number;
  coverImage: {
    large: string;
  };
  title: {
    romaji: string;
    english: string;
  };
  genres: string[];
  description: string;
  bannerImage?: string;
  episodes?: number;
  status: string;
  averageScore: number;
  rating: number;
  image: string;
}

interface AnimeCardProps {
  title: string;
  image: string;
  genres: string[];
  rating: number;
  id: number;
}

interface AnimeProps {
  averageScore: number;
  coverImage: {
    large: string;
  };
  title: {
    romaji: string;
    english: string;
    native?: string;
  };
  image: string;
  genres: string[];
  rating: number;
  id: number;
}

interface AnimeStore {
  selectedCategory: string;
  searchQuery: string;
  page: number;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;
}

interface UseAnimeLoaderReturn {
  animes: AnimeProps[];
  loading: boolean;
  emptyResult: boolean;
  loadNextPage: () => void;
}

interface UseAnimeDetailsReturn {
  anime: Anime | null;
  loading: boolean;
  goBack: () => void;
}
