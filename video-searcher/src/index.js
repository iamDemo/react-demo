import React, {Component} from "react";
import ReactDOM from "react-dom";
// npm install --save youtube-api-search
import YTSearch from "youtube-api-search";
// npm install --save lodash
import _ from "lodash";

import SearchBar from "./components/search_bar"
import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";

// https://console.developers.google.com/apis/credentials
const API_KEY = '';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: []
    };
  }

  videoSearch(term) {
    YTSearch(
      {key: API_KEY, term: term},
      videos => {
        // console.log(videos);
        this.setState({
          selectedVideo: videos[0],
          videos: videos
        });
      }
    )
  }

  render() {
    console.log(">>> Render App");

    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    // this.state.blah will update itself once blah is changed
    // <FooComponent onBlah= > & <FooComponent blah= />: both onBlah and blah are part of `props` which can be accessed inside the FooComponent
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
                   onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}/>
      </div>
    );
  }
}

// adding div block into index.html
ReactDOM.render(<App/>, document.querySelector(".container"));
