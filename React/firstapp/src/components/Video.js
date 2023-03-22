import React from "react";
import ReactPlayer from "react-player/youtube";

function MyVideo () {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=j1Xf7AxO2a0'
    controls={true}
    playing={false}
    volume={0.5}
    />
  );
};

export default MyVideo
