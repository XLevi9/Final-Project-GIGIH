import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import VideoDetail from "./pages/VideoDetail.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/channels" element={<Home />} />
        <Route path="/play/search" element={<SearchPage />} />
        <Route path="/play/channel/:id" element={<VideoDetail />} />
      </Routes>
    </div>
  );
};

export default App;
