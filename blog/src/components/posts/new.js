import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {reduxForm} from "redux-form";
import {createPost} from "../../actions";

class New extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.onSubmit = this.onSubmit.bind(this)
  // }

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(formValues) {
    console.log('New: onSubmit receives -> ', formValues);

    this.props.createPost(formValues)
      .then( () => {
        this.context.router.push('/');
      });
  }

  render() {
    const {fields: {title, categories, content}, handleSubmit} = this.props;

    // title, categories, content are enriched by react-form, and they have extra stuff
    // every time, title is changed, the render() will be called since onChange() method is defined in title which {...title} is added later
    console.log('New: retrieves props', this.props);
    console.log('New: retrieves title ->', title);
    console.log('New: retrieves handleSubmit ->', handleSubmit);

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          {/* title is enriched by react-form, extract stuffs are put here like onChange=blah */}
          <input type='text' className='form-control'  {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type='text' className='form-control'  {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea type='text' className='form-control'  {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>

        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}

function validate(formValues) {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a valid title';
  }

  if (!formValues.categories) {
    errors.categories = 'Please enter valid categories';
  }

  if (!formValues.content) {
    errors.content = 'Please enter a valid content';
  }

  return errors;
}

// react-form will dispatch the date to its owner reducer (declared in reducers/index.js) via its own action
// then those fields will be put in props, so in the component, this.props.fields.blah can be accessed
export default reduxForm(
  {form: 'PostsNewForm', fields: ['title', 'categories', 'content'], validate},
  null,
  {createPost}
)(New);
