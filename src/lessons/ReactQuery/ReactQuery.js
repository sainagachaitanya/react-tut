import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NavBar from "./components/NavBar";
import { createContext } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const ReactQuery = () => {

  const [username, setUsername] = useState("Sai");

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  )
};

export default ReactQuery;