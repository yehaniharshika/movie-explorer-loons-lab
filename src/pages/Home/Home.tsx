import { useState } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";

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
