export function formatAnimeTitle(title: {
  english: string;
  romaji: string;
}): string {
  return title.english || title.romaji || "Unknown Title";
}

export const getRatingColor = (rating: number): string => {
  if (rating > 80) return "bg-success";
  if (rating >= 50) return "bg-warning";
  return "bg-danger";
};

export const getShortenTitle = (title: string): string => {
  return title.length > 30 ? `${title.slice(0, 60)}...` : title;
};

export const getShortTitleFormated = (title: {
  english: string;
  romaji: string;
}): string => {
  return getShortenTitle(formatAnimeTitle(title));
};
