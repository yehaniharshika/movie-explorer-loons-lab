import Header from "../../components/Header/Header";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import TopRatedMovies from "../../components/TopRatedMovie/TopRatedMovie";


const Home = () => {

  return (
    <div>
      <Header />
      <TrendingMovies/>
      <TopRatedMovies />
    </div>
  );
};

export default Home;
