import { useEffect, useState } from 'react';
import Style from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        youtube.mostPopular()
        .then(videos => setVideos(videos));
    }, [])

    const onSearch = query => {
        youtube.search(query)
        .then(videos => setVideos(videos));
    }

    return <>
        <SearchHeader onSearch={onSearch} />
        <VideoList videos={videos} />
    </>;

}

export default App;
