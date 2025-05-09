import { useState } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import {category ,movieType} from "../../api/tmdbApi";
import * as Config from "../"

const Home = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  
  return (
    <div>
      <Header/>
      <About/>
    </div>
  );
};

export default Home;
