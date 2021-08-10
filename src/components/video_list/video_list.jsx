import React from 'react';
import VideoItem from '../video_item/video_item';
import Style from './video_list.module.css'

const VideoList = ({ videos, onVideoClick, display }) => (
    <ul className={Style.list}>
        {videos.map(video => 
            <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display}/>
        )}
    </ul>      
);

export default VideoList;