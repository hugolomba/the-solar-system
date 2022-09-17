import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Planet from "./pages/Planet";
import ErrorPage from "./pages/ErrorPage";
import "./style/app.css";
import axios from "axios";
import { Fade, Slide } from "react-awesome-reveal";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [planet, setPlanet] = useState({});
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    axios
      .get("https://api-solar-system.herokuapp.com/planets")
      .then((response) => {
        setPlanets(response.data);
      });
  }, []);

  // console.log(planets);
  return (
    <div className="App">
      <Navbar planets={planets} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planeta/:planeta" element={<Planet />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
