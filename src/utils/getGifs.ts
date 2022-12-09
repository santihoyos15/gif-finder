const PARAMS = {
  API_KEY: "api_key",
  Q: "q",
  LIMIT: "limit",
  OFFSET: "offset",
  RATING: "rating",
  LANG: "lang",
  RANDOM_ID: "random_id",
  BUNDLE: "bundle",
};

const API_KEY = "TL74ocSAeR2Uim3724nnph1j4ikTul9i";

type dataElement = {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
};

const formatURL = (URL: string) => {
  return URL.replace(/[ ]/g, "+");
};

export const getGifs = async (query: string, limit: number) => {
  const URL = formatURL(
    `https://api.giphy.com/v1/gifs/search?${PARAMS.API_KEY}=${API_KEY}&${PARAMS.Q}=${query}&${PARAMS.LIMIT}=${limit}`
  );
  const response = await fetch(URL);
  const { data } = await response.json();

  const gifs = data.map((resElement: dataElement) => ({
    id: resElement.id,
    title: resElement.title,
    url: resElement.images.downsized_medium.url,
  }));

  return gifs;
};
