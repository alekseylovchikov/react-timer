var React = require('react');

// components
var Navbar = require('Navbar');

var Main = (props) => {
    return (
        <div>
          <Navbar />
          <div className="row">
            <div className="columns small-centered medium-6 large-4">
              { props.children }
            </div>
          </div>
        </div>
    );
};

module.exports = Main;
