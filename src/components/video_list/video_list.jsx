import React from "react";
import VideoItem from "../video_item/video_item";
import Style from "./video_list.module.css";

const VideoList = ({ videos, onSelectVideo, display }) => (
  <ul className={Style.videos}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onSelectVideo={onSelectVideo}
        display={display}
      />
    ))}
  </ul>
);

export default VideoList;
