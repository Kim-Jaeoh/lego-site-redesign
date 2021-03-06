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
  // const userInfo = useContext(AuthContext);
  // console.log(userInfo); // 로그인이 아닌경우 null
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/brand" element={<Brand />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/asd" element={<Asd />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
