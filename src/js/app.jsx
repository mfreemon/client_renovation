/** @jsx React.DOM */
import React from 'react';
import Router from 'react-router';
import routes from '../routes/route';


Router.run(routes, Router.HistoryLocation, (Handler)=> {
  React.render(<Handler/>, document.getElementById('example'));
});
