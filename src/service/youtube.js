// import axios from 'axios';

class Youtube {
    constructor(httpClient){
        // 2. axios 라이브러리를 사용하면서도 index.js에서 선언해서 보내줄때..!
        this.client = httpClient;

        // 1. axios 라이브러리를 사용하였을때..!
        // this.client = axios.create({
        //     baseURL : "https://youtube.googleapis.com/v3",
        //     params : {key: key},
        // });
        // axios 라이브러리를 사용하면 중복되는 baseURL과 key를 미리 정의해놓고 재사용가능하며
        // 알아서 json으로 변환해주고, 오래된 브라우저에서도 호환가능하다.

        // 0. fetch로 작업했을때 간단하게..!
        // this.key = key;
        // this.requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };
    }

    async mostPopular() {
        const response = await this.client.get("videos", {
            params : {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 20
            }
        });
        return response.data.items;
    }

    async search(query) {
        const response = await this.client.get("search", {
            params : {
                part: 'snippet',
                maxResults: 20,
                q: query,
                type: 'video'
            }
        });
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }))
    }
}

export default Youtube;
