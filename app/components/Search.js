var React = require('react');
var ReactDOM = require('react-dom');

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function() {
      return {
        city: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.city
    )
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label className='header' htmlFor='city'>
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
            className='button'
            type='submit'
            // if button value is empty is not there it is disabled
            disabled={!this.state.city}>
            Submit
          </button>
        </div>
      </form>
    )
  }
}

module.exports = SearchInput;
