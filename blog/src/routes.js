import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app'
import PostsIndex from './components/posts/index'
import PostsShow from './components/posts/show'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/>
    <Route path="posts/:id" component={PostsShow}/>
  </Route>
);
