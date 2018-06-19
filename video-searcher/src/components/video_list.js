import React, {Component} from "react";

import VideoListItem from "./video_list_item"

class VideoList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log(">>> Render VideoList");

    const videoItems = this.props.videos.map(video => {
      //  Each child in an array or iterator should have a unique "key" prop.
      return (<VideoListItem
          video={video}
          key={video.etag}
          onVideoSelect={this.props.onVideoSelect}/>
      );
    });

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }
}

export default VideoList