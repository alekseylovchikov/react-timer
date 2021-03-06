var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSec={62} />);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var sec = 621;
      var expected = '10:21';
      var actual = clock.formatSeconds(sec);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var sec = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(sec);

      expect(actual).toBe(expected);
    });
  });
});
