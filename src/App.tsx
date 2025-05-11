import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import FavoriteMovies from "./pages/FavoriteMovie/FavoriteMovie.tsx";
import Footer from "./components/Footer/Footer.tsx";
import MovieDetails from "./components/MovieList/MovieDetails.tsx";
import { store, type RootState } from "./store/store.ts";
import { useEffect } from "react";
import { useSelector, Provider } from "react-redux";


const AppContent = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="app" style={{backgroundColor: isDarkMode ? "#1C1C1E" : "#ffffff"}}>
        <NavBar />
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
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;
