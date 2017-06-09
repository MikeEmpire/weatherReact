var React = require('react');
var ReactDOM = require('react-dom');
var api = require('../utils/api');

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'torrance'
    }
  }
  componentDidMount() {
    api.fetchWeather('torrance')
      .then(function(weather) {
        console.log(weather)
      })
  }
  render() {
    return(
      <div>
        Hello Weather
      </div>
    )
  }
}

module.exports = Weather;
