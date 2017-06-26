var React = require('react');
var ReactDOM = require('react-dom');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;
var Loading = require('./Loading');

function WeatherGrid(props) {
  return (
    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
      {props.city.map(function (day, index){

        return (
          <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
            <ul key={index} className='list-group'>
              <li className='list-group-item'>Day {index + 1}</li>
              <li className='list-group-item'>
                {day.weather[0].description}</li>
                <li className='list-group-item'>{Math.floor(day.temp.eve * 9/5 - 459.67)} ˚F
                </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      error: null,
      loading: true
    }
    this.handleReset = this.handleReset.bind(this);
    this.getCity = this.getCity.bind(this);
  }
  componentDidMount() {
    console.log('component Mounted');
    this.getCity(this.props.city);
  }

  getCity(city) {
    this.setState(function(city) {
      return {
        city: ''
      }
    });
    api.fetchWeather(this.props.city)
      .then(function(weather) {
        if(weather === null) {
          return this.setState(function () {
            return {
              error: 'Looks like there was error. Make sure your city name is valid',
              loading: false,
            }
          });
        }
        this.setState(function() {
          return {
            error: null,
            city: weather,
            loading: false
          }
        })
      }.bind(this)
    );
  }

  handleReset() {
    location.reload();
  }

  render() {
    var city = this.state.city;
    return (
      <div>
        <h1>{this.props.city}</h1>
        {!city ?
          <Loading /> :
          <WeatherGrid
            city={city}
          />}
        <button
          className='Reset btn btn-default'
          onClick={this.handleReset}
        >
          Reset
        </button>
      </div>

    )
  }
}

module.exports = City;
