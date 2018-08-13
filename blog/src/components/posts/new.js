import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class New extends Component {
  render() {
    return (
      <form>
        <h3>Create a Post</h3>

        <label>Title</label>
        <input type='text' className='form-control'/>


        <label>Categories</label>
        <input type='text' className='form-control'/>


        <label>Content</label>
        <textarea type='text' className='form-control'/>

        <button type='submit' className='btn btn-primary'>Submit</button>

        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}

export default New;
