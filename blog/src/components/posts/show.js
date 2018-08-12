import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import {fetchPost} from "../../actions/index";

class Show extends Component {
  componentWillMount() {
    console.log('Show receives post id', this.props.params.id);

    this.props.fetchPost(this.props.params.id)
  }

  render() {
    // const post = this.props.post;
    const {post} = this.props;

    if (!post) {
      return (
        <div>
          loading...
        </div>
      )
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post}
}

export default connect(mapStateToProps, {fetchPost})(Show)
