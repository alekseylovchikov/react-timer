var React = require('react');
var { Link, IndexLink } = require('react-router');

var Navbar = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
            <li><Link to="" activeClassName="active">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Awesome Application with <a href="#" target="_blank">React.JS</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;