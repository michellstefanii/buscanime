import { renderHook, act } from "@testing-library/react";
import { useSearch } from "../hooks/useSearch";
import { useAnimeStore } from "../store/useAnimeStore";

jest.mock("../store/useAnimeStore", () => ({
  useAnimeStore: jest.fn(),
}));

describe("useSearch Hook", () => {
  let mockSetSearchQuery: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    mockSetSearchQuery = jest.fn();

    jest.mocked(useAnimeStore).mockReturnValue({
      setSearchQuery: mockSetSearchQuery,
      selectedCategory: "Action",
      searchQuery: "",
    });
  });

  it("should initialize with an empty searchTerm", () => {
    const { result } = renderHook(() => useSearch());
    expect(result.current.searchTerm).toBe("");
  });

  it("should update searchTerm when setSearchTerm is called", () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.setSearchTerm("Naruto");
    });

    expect(result.current.searchTerm).toBe("Naruto");
  });

  it("should reset searchTerm when selectedCategory changes", () => {
    const { result, rerender } = renderHook(() => useSearch());

    act(() => {
      result.current.setSearchTerm("One Piece");
    });

    expect(result.current.searchTerm).toBe("One Piece");

    jest.mocked(useAnimeStore).mockReturnValue({
      setSearchQuery: mockSetSearchQuery,
      selectedCategory: "Comedy",
      searchQuery: "",
    });

    rerender();

    expect(result.current.searchTerm).toBe("");
  });

  it("should update searchTerm when searchQuery changes", () => {
    const { result, rerender } = renderHook(() => useSearch());

    jest.mocked(useAnimeStore).mockReturnValue({
      setSearchQuery: mockSetSearchQuery,
      selectedCategory: "Action",
      searchQuery: "Attack on Titan",
    });

    rerender();

    expect(result.current.searchTerm).toBe("Attack on Titan");
  });

  it("should call setSearchQuery when handleSearch is called", () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.setSearchTerm("Bleach");
    });

    act(() => {
      result.current.handleSearch();
    });

    expect(mockSetSearchQuery).toHaveBeenCalledWith("Bleach");
  });
});
