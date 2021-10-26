import React from "react";

// method component that is passed videos from App.js and returns a list of Videos
const VideoList = props => {
    return <div>{props.videos.length}</div> 
}

export default VideoList;