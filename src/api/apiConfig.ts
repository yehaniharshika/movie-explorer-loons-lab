const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "b855d823ec03963ae765a4c4fce6e7d8",
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
