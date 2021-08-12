import { useState, useEffect, useCallback } from "react";
import Style from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]); // []빈 배열을 인자를 넘길경우 처음 한번만 실행된다.

  const search = useCallback((query) => {
    youtube.search(query).then((videos) => {
      setSelectedVideo(null);
      setVideos(videos);
    });
  }, [youtube]);
  // useCallback은 최초에 한번 메모리에 저장되는데
  // 한번 만들면 계속 메모리에 저장하고 있기 때문에 필요한 경우에만 사용해야된다.

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <SearchHeader onSearch={search} />
      <section className={Style.content}>
        {selectedVideo && (
          <div className={Style.videoDetail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={Style.videoList}>
          <VideoList
            videos={videos}
            onSelectVideo={selectVideo}
            display={selectedVideo ? "list" : "gird"}
          />
        </div>
      </section>
    </>
  );
}

export default App;
