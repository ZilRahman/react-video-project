import React from "react";
import "./VideoItem.css";

// functional component that returns a single video object
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // onVideoSelect is a call back function that updates App.js state object with the video to show
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
