var React = require('react');
var ReactDOM = require('react-dom');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

class WeatherGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    api.fetchWeather(this.props.city)
      .then(function(weather) {
        console.log(weather)
      })
  }

  render() {
    console.log(this.props);
    return (
      <div className='col-lg-3'>
        WeatherGrid
        {this.props.city}
      </div>
    )
  }
}

module.exports = WeatherGrid;
