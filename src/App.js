import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Planet from "./pages/Planet";
import ErrorPage from "./pages/ErrorPage";
import "./style/app.css";
import axios from "axios";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./style/mediaQuery.css";
import Dock from "./components/Dock";

function App() {
  // const [planet, setPlanet] = useState({});
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    axios
      .get("https://solar-system-api.up.railway.app/planets")
      .then((response) => {
        setPlanets(response.data);
      });
  }, []);

  // console.log(planets);
  return (
    <div className="App">
      <Navbar planets={planets} />

      {/* <Loading /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/planeta/:planeta" element={<Planet />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
