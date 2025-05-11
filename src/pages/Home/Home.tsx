import {useState } from "react";
import Header from "../../components/Header/Header";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
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

  return (
    <div>
      <Header />
      <TrendingMovies/>
      <TopRatedMovies />
    </div>
  );
};

export default Home;
