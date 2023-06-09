import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NavBar from "./components/NavBar";
import { createContext } from "react";

export const AppContext = createContext();

const StateManagement = () => {

  const [username, setUsername] = useState("Sai");

  return (
    <div>
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="*" element={<h1>404 Page Not Found</h1>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
};

export default StateManagement;