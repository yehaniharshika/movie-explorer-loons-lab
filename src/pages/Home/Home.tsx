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

  const API_KEY = "b855d823ec03963ae765a4c4fce6e7d8";
  const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  
  return (
    <div>
      <Header />

      <TrendingMovies
        movies={movies}

      />
      <TopRatedMovies />
    </div>
  );
};

export default Home;
