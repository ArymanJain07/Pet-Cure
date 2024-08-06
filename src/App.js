import React from "react";
import "./assets/css/style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import FindVet from "./components/FindVet";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Review from "./components/Review";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./loginSignupPages/SignUpAsPetOwner";
import ManageLogin from "./loginSignupPages/ManageLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<ManageLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
