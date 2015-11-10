/** @jsx React.DOM */

var React = require("react");

var App = React.createClass({
  render(){
    return <h1>Hello World I am working</h1>;
  }
})

React.render(<App/>, document.getElementById('example'));
