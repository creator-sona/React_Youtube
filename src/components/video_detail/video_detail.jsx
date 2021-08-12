import React from "react";
import Style from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={Style.detailArea}>
      <iframe
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
        title="youtube video player"
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <p>{video.snippet.description}</p>
    </section>
  );
};

export default VideoDetail;
