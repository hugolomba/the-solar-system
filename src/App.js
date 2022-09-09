import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Planet from "./pages/Planet";
import "./style/app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Planet />
      <Footer />
    </div>
  );
}

export default App;
