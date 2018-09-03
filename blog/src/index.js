import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import reducers from './reducers';
import PostsIndex from './components/posts/index'
import PostsShow from './components/posts/show'
import PostsNew from './components/posts/new'


// add `promise` to let react middleware handle asynchronous request, only when actual response is back, then reducer will be executed
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      {/*BrowserRouter only allows one single component*/}
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route path="/posts/:id" component={PostsShow}/>
          <Route path="/" component={PostsIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
