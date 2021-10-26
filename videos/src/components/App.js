import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {videos : [], 
    selectedVideo: null

};

    // call back method from SearchBar prop that communiates search term to youtube api
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params : {
                q: term
            }
        }) 
        this.setState({videos : response.data.items});
    };

    // call back method to display selected video from videoList.js
    onVideoSelect = (video) => {
        this.setState({selectedVideo : video})
    }
    
    render () {
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
        </div>

        )
    }
}

export default App;