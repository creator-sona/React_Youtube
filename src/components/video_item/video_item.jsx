import React from 'react';
import Style from './video_item.module.css'

const VideoItem = ({video : {snippet}}) => ( 
    // 인자를 (props)라고 쓰면 아래 태그에서 값을 사용하기위해 props.video.snippet~ 이 반복된다
    // ({video : {snippet}}) 이런식으로 작성하면
    // props안에있는 video의 반복되는 snippet까지 변수로 선언한것 처럼 줄여서 사용할 수 있다.

    <li className={Style.item}>
        <img className={Style.thumbnail} 
            src={snippet.thumbnails.medium.url} />
        <div>
            <p>{snippet.title}</p>
            <p>{snippet.channelTitle}</p>
        </div>
    </li>
);

export default VideoItem;