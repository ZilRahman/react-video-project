import React from "react";
import VideoItem from "./VideoItem";

// method component that is passed videos from App.js and returns a list of Videos
const VideoList = ({ videos }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} /> })

    return <div>{renderedList}</div> 
}

export default VideoList;