import React, { memo } from "react";
import Style from "./video_item.module.css";

const VideoItem = memo( // memo를 사용하면 props가 업데이트가 되지 않았을때, 불필요한 렌더링을 하지 않도록 해줌
  ({ video, onSelectVideo, display }) => {
  // 인자를 (props)라고 쓰면 아래 태그에서 값을 사용하기위해 props.video.snippet~ 이 반복된다
  // ({video : {snippet}}) 이런식으로 작성하면
  // props안에있는 video의 반복되는 snippet까지 변수로 선언한것 처럼 줄여서 사용할 수 있다.
  
  const styleType = display === "list" ? Style.list : Style.grid;
  return (
    <li className={`${Style.video} ${styleType}`}>
      <div className={Style.inner} onClick={() => onSelectVideo(video)}>
        <img
          src={video.snippet.thumbnails.medium.url}
          className={Style.thumbnail}
          alt="video thumbnail"
        />
        <div>
          <p className={Style.videoTit}>{video.snippet.title}</p>
          <p className={Style.channelTit}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
