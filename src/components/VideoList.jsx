import React, { useEffect, useState } from "react";
import Video from "./Video";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://server-side-final.vercel.app/videos")
      .then((res) => res.json())
      .then((data) => {
        const groupedVideos = [];
        for (let i = 0; i < data.length; i += 6) {
          groupedVideos.push(data.slice(i, i + 6));
        }
        setVideos(groupedVideos);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {videos.map((videoGroup, index) => (
        <div className="Video-Row" key={index}>
          {videoGroup.map((item) => (
            <Video item={item} key={item.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default VideoList;
