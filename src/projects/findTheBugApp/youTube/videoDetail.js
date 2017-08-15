import React from 'react';

const VideoDetail = ({ video }) => {
  const videoID = '';
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <h3><b>{video && video.snippet.title}</b></h3>
        <p>{video && video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
