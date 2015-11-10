/** @jsx React.DOM */
import React from 'react';
import Router from 'react-router';
import Login from './components/Login';
import routes from './routes/Route';



Router.run(routes, Router.HistoryLocation, (Handler)=> {
  React.render(<Handler/>, document.getElementById('example'));
});
