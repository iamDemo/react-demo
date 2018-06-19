import React, {Component} from "react";

class VideoListItem extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  render() {
    console.log(">>> Render VideoListItem");

    const video = this.props.video;

    return (
      <li className="list-group-item" onClick={() => this.props.onVideoSelect(this.props.video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={video.snippet.thumbnails.default.url}/>
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem