// src/api/axiosClient.ts
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b855d823ec03963ae765a4c4fce6e7d8", // replace with your actual TMDB API key
  },
});

// ✅ Add interceptor to return only the data part of the response
axiosClient.interceptors.response.use((response) => response.data);

export default axiosClient;
