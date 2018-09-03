import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deletePost, fetchPost} from "../../actions/index";

class Show extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;

    console.log('Show: fetch a single post', id);

    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/')
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

function mapStateToProps({posts}, ownProps) {
  // this.props is not accessible here
  // {posts} ==> const posts = state.posts
  // convert the big posts to a single one here
  return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(Show)
