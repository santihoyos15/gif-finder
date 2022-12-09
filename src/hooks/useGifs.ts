import { useEffect, useState } from "react";
import { getGifs } from "../utils/getGifs";
import { Gif } from "../components";

type returnType = {
  gifs: Gif[];
  isLoading: boolean;
  isError: boolean;
};

export const useGifs = (query: string, limit: number): returnType => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getImages = async () => {
    try {
      const images = await getGifs(query, limit);
      setGifs(images);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [query]);

  return {
    gifs,
    isLoading,
    isError,
  };
};
