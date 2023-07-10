import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@pages/Header";
import Home from "@pages/Home";
import Footer from "@pages/Footer";
import NotFound from "@pages/NotFound";
import Login from "@pages/Login";
import { useDispatch } from "react-redux";
import { getInitialMode, toggleMode } from "./reducers/uiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initialMode = getInitialMode();
    dispatch(toggleMode(initialMode));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
