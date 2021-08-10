class Youtube {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    // mostPopular() {
    //     return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=6&key=${this.key}`, this.requestOptions)
    //     .then(response => response.json())
    //     .then(result => result.items)
    // }
    // 위와 같이 fetch를 사용할수도 있으나 
    // async로 작성하는것이 프로미스를 리턴한다는 것을 명시적으로 알수 있으므로 가독성에 좋다.

    async mostPopular() {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=6&key=${this.key}`, this.requestOptions);
        const result_1 = await response.json();
        return result_1.items;
    }

    async search(query) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${query}&type=video&key=${this.key}`, this.requestOptions);
        const result_1 = await response.json();
        const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
        return items;
    }
}

export default Youtube;