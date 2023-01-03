import React, { useContext } from "react";
import "./App.css";
import { Reset } from "styled-reset";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Brand from "./components/Brand";
import { auth } from "./firebase";
import { AuthContext } from "./context/authContext";

console.log(auth);

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/brand" element={<Brand />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
