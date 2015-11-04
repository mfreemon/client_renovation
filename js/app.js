import React from 'react';
import Router from 'react-router';
import {DefaultRoute, Link, Route, RouteHandler} from 'react-router';

import LoginHandler from './components/Login.js';

let App=React.createClass({
  render(){
    return(
      <nav>
        <Link to="app">Home</Link>
        <Link to="app">Login</Link>
        <RouteHander/>
      </nav>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name ="login" path="/login" hander={LoginHandler}/>
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler/>, document.body);
})
