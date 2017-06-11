var React = require('react');
var ReactDOM = require('react-dom');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;
var WeatherGrid = require('./WeatherGrid');

class CityInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        city: value
      }
    })
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.city
    )
  }
  render() {
    return (
       <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label className='header' htmlFor=''>
            {this.props.label}
          </label>
          <input
            className='form-control'
            placeholder='city'
            type='text'
            autoComplete='off'
            value={this.state.city}
            onChange={this.handleChange}/>
          <small className='form-text text-muted'>
            Please put the city name above
          </small>
          <button
            className='btn btn-default'
            type='submit'
            // if button value is empty is not there it is disabled
            disabled={!this.state.city}
            >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(city) {
    this.setState(function(){
      var newState = {};
      newState['city'] = city;
      return newState;
    })
  }

  render() {
    var city = this.state.city;
    console.log(this.state);
    return (
      <div className='row'>
        {!city &&
          <CityInput
          label='City'
          onSubmit={this.handleSubmit}
        />}

        {city !== '' ?
          <WeatherGrid
            city={this.state.city}
          /> : ''}
      </div>
    )
  }
}




module.exports = Weather;
