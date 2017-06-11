var React = require('react');
var ReactDOM = require('react-dom');


class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
          Hello {this.props.city}
      </div>
    )
  }
}

module.exports = Results;
