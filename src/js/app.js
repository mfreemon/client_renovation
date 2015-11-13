/** @jsx React.DOM */
import React from 'react'
import { render } from 'react-dom'

// Import components...
import {Router, Route, Link} from 'react-router'
import {IndexRoute} from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';


// add some <Link> elements...
const App = React.createClass({
  render() {
    return (
      <div>
        <div className="header">
          {/* change the <a>s to <Link>s */}
          <ul className="navigation">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="services" component={Services}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('container'));
