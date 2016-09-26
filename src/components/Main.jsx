var React = require('react');

// components
var Navbar = require('Navbar');

var Main = (props) => {
    return (
        <div>
          <Navbar />
          <div className="row">
            { props.children }
          </div>
        </div>
    );
};

module.exports = Main;
