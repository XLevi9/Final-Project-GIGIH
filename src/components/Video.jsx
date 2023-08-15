import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Img } from "@chakra-ui/react";
import { Eye } from "feather-icons-react/build/IconComponents";

const Video = ({ item }) => {
  const [viewerCount, setViewerCount] = useState(0);

  // Fungsi untuk menghasilkan angka acak
  const getRandomViewerCount = () => {
    return Math.floor(Math.random() * 1000); // Angka acak antara 0 dan 999
  };

  // Mengupdate jumlah penonton setiap beberapa detik
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(getRandomViewerCount());
    }, 5000);

    return () => {
      clearInterval(interval); // Membersihkan interval saat komponen unmount
    };
  }, []);

  return (
    <div className="Container-Video">
      <Link to={`/play/channel/${item.id}`} className="Container-Thumb">
        <Img src={item.thumbnailUrl} className="Container-Thumb" />
      </Link>
      <div className="Video-Title-Account">
        <p className="Video-Title">{item.title}</p>
        <p className="Video-Account">{item.accountName}</p>
      </div>
      <div className="Video-Info">
        <p className="Box-Live-Icon">LIVE</p>
        <div className="Video-Info-Viewer">
          <Eye size={15} className="Video-Eye-Icon" />
          <p className="Viewer-Count">{viewerCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
