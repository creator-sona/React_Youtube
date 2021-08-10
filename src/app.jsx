import { useEffect, useState } from 'react';
import Style from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        youtube.mostPopular()
        .then(videos => setVideos(videos));
    }, [])

    const onSearch = query => {
        youtube.search(query)
        .then(videos => {
            setVideos(videos)
            setSelectedVideo(null)
        });
    }

    const selectVideo = video => {
        setSelectedVideo(video);
    }

    return <>
        <SearchHeader onSearch={onSearch} />
        <section className={Style.content}>
            {selectedVideo && 
                <div className={Style.detail}><VideoDetail video={selectedVideo}/></div>
            }
            <div className={Style.list}>
                <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
            </div>
        </section>
    </>;

}

export default App;
