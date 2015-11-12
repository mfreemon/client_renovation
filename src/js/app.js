/** @jsx React.DOM */
import React from 'react'
import { render } from 'react-dom'

// Import components...
import { Router, Route, Link } from 'react-router'
import Login from './components/Login';
import Contact from './components/Contact';

// add some <Link> elements...
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>This the app</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    );
  }
});

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={Login}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('example'));
