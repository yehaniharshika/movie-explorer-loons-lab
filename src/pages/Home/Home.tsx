import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import axios from "axios";
import TopRatedMovies from "../../components/TopRatedMovie/TopRatedMovie";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Optional: scroll to movie section or trigger logic
  };

  const API_KEY = "b855d823ec03963ae765a4c4fce6e7d8";
  const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Header />

      <TrendingMovies
        movies={movies}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <TopRatedMovies />
    </div>
  );
};

export default Home;
