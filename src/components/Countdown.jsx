var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  handleSetCountdown: function(sec) {
    this.setState({
      count: sec
    });
  },
  render: function() {
    var { count } = this.state;
    return (
      <div>
        <Clock totalSec={ count } />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
});

module.exports = Countdown;
