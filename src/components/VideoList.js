import React from "react";
import VideoItem from "./VideoItem";
import { List } from "semantic-ui-react";

const VideoList = ({
  data,
  onVideoSelected,
  onTitleSelected,
  onDescSelected,
}) => {
  return (
    <div className="video-list">
      <List floated="left">
        <VideoItem
          data={data}
          onDescSelected={onDescSelected}
          onVideoSelected={onVideoSelected}
          onTitleSelected={onTitleSelected}
        />
      </List>
    </div>
  );
};

export default VideoList;
