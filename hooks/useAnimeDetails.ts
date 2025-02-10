import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchAnimeById } from "@/services/fetchAnimeById";

export function useAnimeDetails(): UseAnimeDetailsReturn {
  const router = useRouter();
  const { id } = useParams();
  const [anime, setAnime] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnime() {
      setLoading(true);
      const data = await fetchAnimeById(String(id));
      setAnime(data);
      setLoading(false);
    }
    loadAnime();
  }, [id]);

  const goBack = () => router.back();

  return { anime, loading, goBack };
}
