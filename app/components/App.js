var React = require('react');
var ReactDOM = require('react-dom');

var Weather = require('./Weather');
var Search = require('./Search');

var api = require('../utils/api');

class App extends React.Component {

  render() {
    return (
      <Weather />
    )
  }
}

module.exports = App;
