import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "@pages/Header";
import Auth from "@pages/Auth";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { getInitialMode, toggleMode } from "./reducers/uiSlice";
import { refreshToken } from "./reducers/authSlice";

function App() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    const initialMode = getInitialMode();
    dispatch(toggleMode(initialMode));
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={accessToken ? <Home /> : <Navigate to="/auth" />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
