import React, {Component} from "react";
import ReactDOM from "react-dom";
// npm install --save youtube-api-search
import YTSearch from "youtube-api-search";


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

    this.videoSearch("testv");
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

    // this.state.blah will update itself once blah is changed
    // <FooComponent onBlah= > is the callback that FooComponent passes value back to here
    // <FooComponent blah= /> is to pass value into FooComponent
    return (
      <div>
        <div>hello world</div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
                   onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}/>
      </div>
    );
  }
}


// adding div block into index.htmlw
ReactDOM.render(<App/>, document.querySelector(".container"));
