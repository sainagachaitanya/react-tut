import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NavBar from "./components/NavBar";

const ReactRouters = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<h1>404 Page Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  )
};

export default ReactRouters;