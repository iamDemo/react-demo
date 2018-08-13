import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {fetchPost, deletePost} from "../../actions/index";

class Show extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    console.log('Show fetches a single post', this.props.params.id);

    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then( () => {
        this.context.router.push('/');
      });
  }

  render() {
    // const post = this.props.post;
    const {post} = this.props;

    if (!post) {
      return (
        <div>
          <Link to='/'>Back to Index</Link>
          <h5>loading...</h5>
        </div>
      )
    }

    return (
      <div>
        <Link to='/'>Back to Index</Link>

        <button className='btn btn-danger pull-xs-right' onClick={this.onDeleteClick.bind(this)}>
          Delete the Post
        </button>

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

export default connect(mapStateToProps, {fetchPost, deletePost})(Show)
