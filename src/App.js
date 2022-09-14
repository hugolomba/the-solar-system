import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Planet from "./pages/Planet";
import "./style/app.css";
import axios from "axios";

import { Routes, Route } from "react-router-dom";

function App() {
  const [planet, setPlanet] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-solar-system.herokuapp.com/planets")
      .then((response) => {
        setPlanets(response.data);
      });
  }, []);

  console.log(planets);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/:planeta" element={<Planet />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
