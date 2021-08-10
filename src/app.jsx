import { useEffect, useState } from 'react';
import Style from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=6&key=AIzaSyDxXD7k4BNluza5HNvjcejo5Y2Ssfr3f-w", requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));

    }, [])

    const onSearch = query => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${query}&type=video&key=AIzaSyDxXD7k4BNluza5HNvjcejo5Y2Ssfr3f-w`, requestOptions)
            .then(response => response.json())
            .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
            .then(items => setVideos(items))
            .catch(error => console.log('error', error));
    }

    return <>
        <SearchHeader onSearch={onSearch} />
        <VideoList videos={videos} />
    </>;

}

export default App;
