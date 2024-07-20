import React from "react";
import "./assets/css/style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import FindVet from "./components/FindVet";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Review from "./components/Review";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <FindVet />
      <Mission />
      <Review />
      <Footer />

    </div>
  );
}

export default App;