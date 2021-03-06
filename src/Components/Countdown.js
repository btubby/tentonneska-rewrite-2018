import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CountDownToNextGig = styled.div`
  color: red;
  font-size: 5vw;
  // line-height: 90%;
`;
const CountdownDigit = styled.span`
  font-size: 100%;
  color: #ffc703;
`;
const CountdownDigitZero = styled.span`
  font-size: 100%;
  color: grey;
`;
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let now = new Date();
    // console.log('calculateCountdown: '+endDate);
    let diff = (Date.parse(new Date(endDate)) - Date.parse(now)) / 1000;
    // console.log('diff: ' + diff);

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
    
    var dayString = '';
    if (countDown.days > 0) {dayString = countDown.days === 1 ? "DAY" : "DAYS"; }
    var hourString = '';
    if (countDown.hours > 0) {hourString = countDown.hours === 1 ? "HOUR" : "HOURS"; }
    
    return (
      <CountDownToNextGig>
        <span>
          {countDown.days > 0 &&
          <CountdownDigit>{this.addLeadingZeros(countDown.days)}</CountdownDigit> 
        }
         <span>{dayString}</span>
        </span>

        <span>
        {countDown.hours > 0 &&
          <CountdownDigit>{this.addLeadingZeros(countDown.hours)}</CountdownDigit> 
        }
        <span>{hourString}</span>
        </span>

        <span>
        {countDown.min > 0 ?
          <CountdownDigit>{this.addLeadingZeros(countDown.min)}</CountdownDigit>
          :
          <CountdownDigitZero>{this.addLeadingZeros(countDown.min)}</CountdownDigitZero>
        }
          <span>MINUTES</span>
        </span>

        <span>
          <CountdownDigit>{this.addLeadingZeros(countDown.sec)}</CountdownDigit>
          <span>SECONDS</span>
        </span>
      </CountDownToNextGig>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

Countdown.defaultProps = {
  date: new Date(),
  width: "100%"
};

export default Countdown;
