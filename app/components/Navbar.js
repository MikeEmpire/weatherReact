var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;


function Navbar () {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to='/'>
            WeatherMan
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

module.exports = Navbar;
