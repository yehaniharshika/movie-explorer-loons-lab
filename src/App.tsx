import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import FavoriteMovies from "./pages/FavoriteMovie/FavoriteMovie.tsx";
import Footer from "./components/Footer/Footer.tsx";
import MovieDetails from "./components/MovieList/MovieDetails.tsx";




function App() {
  

  return (
    <>
      <div className="app">
        <NavBar/>
  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite-movies" element={<FavoriteMovies />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
  
}

export default App;
