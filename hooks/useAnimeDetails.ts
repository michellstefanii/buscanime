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
      setAnime(data || null);
      setLoading(false);
    }
    loadAnime();
  }, [id]);

  const goBack = () => {
    if (
      document.referrer &&
      new URL(document.referrer).origin === window.location.origin
    ) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return { anime, loading, goBack };
}
