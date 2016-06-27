var React = require('react');
var Clock = require('Clock');

var Navigation = require('Navigation');

var Countdown = () => {
  return (
    <div>
      <Clock totalSeconds={129} />
    </div>
  )
}

module.exports = Countdown;
