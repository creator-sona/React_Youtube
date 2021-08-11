import React from 'react';
import Style from './video_detail.module.css';

const VideoDetail = ({ video }) => (
    <section className={Style.detail}>
        <iframe type="text/html" width="100%" height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0" allowFullScreen title="youtube video player"></iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <pre className={Style.desc}>{video.snippet.description}</pre>
    </section>
);

export default VideoDetail;