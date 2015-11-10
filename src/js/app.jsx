/** @jsx React.DOM */
var React = require("react");

var App = React.createClass({
  render(){
    return <h1>I am here</h1>
  }
})

React.render(<App/>, document.getElementById('example'));
