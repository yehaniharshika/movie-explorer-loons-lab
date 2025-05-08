import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";



function App() {
  

  return (
    <>
      <div className="app">
        <NavBar/>
  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </main>
      </div>
  
    </>
  );
  
}

export default App;
