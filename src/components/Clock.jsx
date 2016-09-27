var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    return {
      totalSec: 0,
    };
  },
  propTypes: {
    totalSec: React.PropTypes.number
  },
  formatSeconds: function(totalSec) {
    var
      sec = totalSec % 60,
      min = Math.floor(totalSec / 60);

    if (sec < 10) {
      sec = '0' + sec;
    }

    if (min < 10) {
      min = '0' + min;
    }

    return min + ':' + sec;
  },
  render: function() {
    var { totalSec } = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSec)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
