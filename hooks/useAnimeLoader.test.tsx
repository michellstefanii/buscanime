import { renderHook, act, waitFor } from "@testing-library/react";
import { useAnimeLoader } from "../hooks/useAnimeLoader";
import { fetchAnimeData } from "../services/fetchAnimeData";
import { useAnimeStore } from "../store/useAnimeStore";
import { mockAnimeList } from "../mocks/mockAnime";

jest.mock("../services/fetchAnimeData", () => ({
  fetchAnimeData: jest.fn(),
}));

jest.mock("../store/useAnimeStore", () => ({
  useAnimeStore: jest.fn(),
}));

describe("useAnimeLoader Hook", () => {
  let mockSetPage: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    mockSetPage = jest.fn();

    jest.mocked(useAnimeStore).mockReturnValue({
      selectedCategory: "Action",
      searchQuery: "",
      page: 1,
      setPage: mockSetPage,
    });
  });

  it("should fetch animes correctly and update the state", async () => {
    jest.mocked(fetchAnimeData).mockResolvedValue(mockAnimeList);

    const { result } = renderHook(() => useAnimeLoader());

    expect(result.current.animes).toEqual([]);
    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.animes).toEqual(mockAnimeList);
      expect(result.current.loading).toBe(false);
      expect(result.current.emptyResult).toBe(false);
    });
  });

  it("should increment the page when calling loadNextPage", async () => {
    jest.mocked(fetchAnimeData).mockResolvedValue(mockAnimeList);

    const { result } = renderHook(() => useAnimeLoader());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    result.current.loadNextPage();

    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  it("should set emptyResult to true if there are no animes", async () => {
    jest.mocked(fetchAnimeData).mockResolvedValue([]);

    const { result } = renderHook(() => useAnimeLoader());

    await waitFor(() => {
      expect(result.current.emptyResult).toBe(true);
      expect(result.current.animes).toEqual([]);
    });
  });

  it("should not load animes if already loading", async () => {
    jest.mocked(fetchAnimeData).mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return mockAnimeList;
    });

    const { result } = renderHook(() => useAnimeLoader());

    act(() => {
      result.current.loadNextPage();
    });

    act(() => {
      result.current.loadNextPage();
    });

    expect(fetchAnimeData).toHaveBeenCalledTimes(1);
  });
});
