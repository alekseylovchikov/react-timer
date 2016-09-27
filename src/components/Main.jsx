var React = require('react');

// components
var Navbar = require('Navbar');

var Main = (props) => {
    return (
        <div>
          <Navbar />
          <h1>Main.jsx</h1>
          <div className="row">
            { props.children }
          </div>
        </div>
    );
};

module.exports = Main;
