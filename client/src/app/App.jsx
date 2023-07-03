import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "@pages/About";
import Compare from "@pages/Compare";
import Footer from "@pages/Footer";
import Header from "@pages/Header";
import Home from "@pages/Home";
import MyList from "@pages/MyList.";
import NotFound from "@pages/NotFound";
import PokeList from "@pages/PokeList";
import Search from "@pages/ItemList";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokeList />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/item" element={<Search />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
