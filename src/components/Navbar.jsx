import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Search } from "feather-icons-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Live");

  // Fungsi untuk mengatur tautan yang aktif
  const handleSetActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="Container-Nav">
      <div className="Wrapper-Nav">
        <div className="Navbar-Left">
          {/* Link untuk membuat tautan ke halaman */}
          <Link
            to="/play/channels"
            onClick={() => handleSetActiveLink("Live")}
            className={`Navbar-Link ${activeLink === "Live" ? "active" : ""}`}
          >
            Live
          </Link>
          <Link
            to="/play/channels?tab=populer"
            onClick={() => handleSetActiveLink("Explore")}
            className={`Navbar-Link ${
              activeLink === "Explore" ? "active" : ""
            }`}
          >
            Explore
          </Link>
          <Link
            to="/play/channels?tab=promo"
            onClick={() => handleSetActiveLink("Promo ULTAH!")}
            className={`Navbar-Link ${
              activeLink === "Promo ULTAH!" ? "active" : ""
            }`}
          >
            Promo ULTAH!
          </Link>
          <Link
            to="/play/channels?tab=official_store"
            onClick={() => handleSetActiveLink("Official Store")}
            className={`Navbar-Link ${
              activeLink === "Official Store" ? "active" : ""
            }`}
          >
            Official Store
          </Link>
          <Link
            to="/play/channels?tab=tips_rekomendasi"
            onClick={() => handleSetActiveLink("Tips Rekomendasi")}
            className={`Navbar-Link ${
              activeLink === "Tips Rekomendasi" ? "active" : ""
            }`}
          >
            Tips Rekomendasi
          </Link>
          <Link
            to="/play/channels?tab=terbaru"
            onClick={() => handleSetActiveLink("Terbaru")}
            className={`Navbar-Link ${
              activeLink === "Terbaru" ? "active" : ""
            }`}
          >
            Terbaru
          </Link>
          <Link
            to="/play/channels?tab=upcoming"
            onClick={() => handleSetActiveLink("Upcoming")}
            className={`Navbar-Link ${
              activeLink === "Upcoming" ? "active" : ""
            }`}
          >
            Upcoming
          </Link>
        </div>
        <div className="Navbar-Right">
          {/* Link ke halaman pencarian */}
          <Link to="/play/search" className="Navbar-Search">
            <Search size={25} className="Navbar-Search" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
