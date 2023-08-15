import React from "react";
import { Search, ArrowLeft } from "feather-icons-react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="search-container">
      <div className="arrow-left-icon" onClick={handleGoBack}>
        <ArrowLeft size={35} />
      </div>
      <div className="search-input-container">
        <Search className="search-icon" size={15} />
        <input
          className="search-input"
          type="text"
          placeholder="Cari video yang mau ditonton"
        />
      </div>
      <h4 className="search-kata-kunci-populer">Kata Kunci Populer</h4>
    </div>
  );
};

export default SearchPage;
