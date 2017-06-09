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
        <form className="navbar-form navbar-right">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"></input>
          </div>
          <Link
            type="submit"
            className="btn btn-default"
            to={'/results'}
          >Submit</Link>
        </form>
      </div>
    </nav>
  )
}

module.exports = Navbar;
