import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from '../../actions/index'

class Index extends Component {
  // componentWillMount will only be called once (will not be called for re-rendering)
  componentWillMount() {
    // TODO if the page is jumped back, will this be called?
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log('Index posts', this.props.posts);

    return this.props.posts.map((post) => {
        return (
          <li className='list-group-item' key={post.id}>
            <span className='pull-xs-right'>{post.categories}</span>
            <strong>{post.title}</strong>
          </li>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function matchStateToProps(state) {
  return {posts: state.posts.all}
}

// import {bindActionCreators} from "redux";
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts: fetchPosts}, dispatch)
// }

// use {fetchPosts} as mapDispatchToPros when key and value are using the same string
export default connect(matchStateToProps, {fetchPosts})(Index);
