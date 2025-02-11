import { renderHook, act, waitFor } from "@testing-library/react";
import { useAnimeDetails } from "../hooks/useAnimeDetails";
import { fetchAnimeById } from "../services/fetchAnimeById";
import { useRouter, useParams } from "next/navigation";
import { mockAnimeData } from "../mocks/mockAnime";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock("../services/fetchAnimeById", () => ({
  fetchAnimeById: jest.fn(),
}));

describe("useAnimeDetails Hook", () => {
  let mockBack: jest.Mock;
  let mockPush: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();

    mockBack = jest.fn();
    mockPush = jest.fn();

    jest.mocked(useRouter).mockReturnValue({
      back: mockBack,
      push: mockPush,
      forward: jest.fn(),
      refresh: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    });
  });

  it("should fetch anime details and update the state correctly", async () => {
    jest.mocked(useParams).mockReturnValue({ id: "1" });
    jest.mocked(fetchAnimeById).mockResolvedValue(mockAnimeData);
    const { result } = renderHook(() => useAnimeDetails());

    expect(result.current.anime).toBeNull();
    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.anime).toEqual(mockAnimeData);
      expect(result.current.loading).toBe(false);
    });
  });

  it("should call router.back() if coming from an application page", async () => {
    jest.mocked(useParams).mockReturnValue({ id: "1" });
    jest.mocked(fetchAnimeById).mockResolvedValue(mockAnimeData);

    Object.defineProperty(document, "referrer", {
      value: "http://localhost/some-page",
      configurable: true,
    });

    const { result } = renderHook(() => useAnimeDetails());

    act(() => {
      result.current.goBack();
    });

    await waitFor(() => {
      expect(mockBack).toHaveBeenCalledTimes(1);
      expect(mockPush).not.toHaveBeenCalled();
    });
  });

  it("should call router.push('/') if coming from an external site", () => {
    jest.mocked(useParams).mockReturnValue({ id: "1" });
    jest.mocked(fetchAnimeById).mockResolvedValue(mockAnimeData);
    Object.defineProperty(document, "referrer", {
      value: "https://google.com",
      configurable: true,
    });

    const { result } = renderHook(() => useAnimeDetails());

    act(() => {
      result.current.goBack();
    });

    expect(mockPush).toHaveBeenCalledWith("/");
    expect(mockBack).not.toHaveBeenCalled();
  });

  it("should call router.push('/') if there is no referrer (direct access)", () => {
    jest.mocked(useParams).mockReturnValue({ id: "1" });
    jest.mocked(fetchAnimeById).mockResolvedValue(mockAnimeData);
    Object.defineProperty(document, "referrer", {
      value: "",
      configurable: true,
    });

    const { result } = renderHook(() => useAnimeDetails());

    act(() => {
      result.current.goBack();
    });

    expect(mockPush).toHaveBeenCalledWith("/");
    expect(mockBack).not.toHaveBeenCalled();
  });

  it("should stop loading and return null for anime if there is no valid ID", async () => {
    jest.mocked(useParams).mockReturnValue({ id: undefined });

    const { result, rerender } = renderHook(() => useAnimeDetails());

    expect(result.current.loading).toBe(true);
    expect(result.current.anime).toBeNull();

    rerender();
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.anime).toBeNull();
    });
  });
});
