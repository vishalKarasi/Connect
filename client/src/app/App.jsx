import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@pages/Header";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { useDispatch } from "react-redux";
import { getInitialMode, toggleMode } from "./reducers/uiSlice";
import Auth from "@pages/Login";

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
        <Route path="/auth" element={<Auth />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
