import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@pages/Header";
import Home from "@pages/Home";
import Profile from "@pages/Profile";
import Footer from "@pages/Footer";
import NotFound from "@pages/NotFound";
import Login from "@pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
