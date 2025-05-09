import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import FavoriteMovies from "./pages/FavoriteMovie/FavoriteMovie.tsx";
import Footer from "./components/Footer/Footer.tsx";



function App() {
  

  return (
    <>
      <div className="app">
        <NavBar/>
  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite-movies" element={<FavoriteMovies />} />
            
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
  
}

export default App;
