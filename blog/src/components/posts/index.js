import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchPosts} from '../../actions/index'

class Index extends Component {
  // this lifecycle method will be called whenever this component is about to render. It won't be called when one part of this component is re-rendered.
  componentWillMount() {
    console.log('Index loads all posts');

    this.props.fetchPosts();
  }

  renderPosts() {
    console.log('Index posts', this.props.posts);

    return this.props.posts.map((post) => {
        return (
          <li className='list-group-item' key={post.id}>
            <Link to={`posts/${post.id}`}>
              <span className='pull-xs-right'>{post.categories}</span>
              <strong>{post.title}</strong>
            </Link>
          </li>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add a Post
          </Link>
        </div>
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
