import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createPost} from "../../actions";

class New extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.onSubmit = this.onSubmit.bind(this)
  // }

  renderField(field) {
    console.log('New: render field', field);

    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        {/* title is enriched by react-form, extract stuffs are put here like onChange=blah, name='title' by using ...field.input */}
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help"> {touched ? error : ""}</div>
      </div>
    )
  }

  onSubmit(formValues) {
    console.log('New: onSubmit receives -> ', formValues);

    this.props.createPost(formValues, () => {
      this.props.history.push("/")
    });
  }

  render() {
    // handleSubmit from react form
    const {handleSubmit} = this.props;

    // title, categories, content are enriched by react-form, and they have extra stuff
    // every time, title is changed, the render() will be called since onChange() method is defined in title which {...title} is added later
    console.log('New: retrieves props', this.props);
    console.log('New: retrieves handleSubmit ->', handleSubmit);

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />

        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />

        <Field
          label='Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}

function validate(formValues) {
  console.log('New: receives form values', formValues);

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
export default reduxForm({validate, form: 'PostsNewForm'})(connect(null, {createPost})(New));
