import React, { Component } from "react";
import styled from "styled-components";
import Countdown from "./Countdown";

import Bomb from "../Assets/bomb2.gif";
import Pete from "../Assets/pete_animated.gif";

const BombContainer = styled.div`
  position: relative;
  top: 3vw;
  left: 9vw;
  text-align: right;
  z-index: 200;
  width: 50%;
`;

const PeteContainer = styled.span`
  position: relative;
  top: -11vw;
  left: -30vw;
`;
const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 74%;
  height: 13vw;
  padding-top: 1vw;
`;
const EventDate = styled.div`
  color: white;
  font-size: 60%;
`;
const EventTitle = styled.div`
  color: #ffc703;
  font-size: 75%;
`;
const EventLocation = styled.div`
  font-size: 60%;
  color: #00bb00;
`;
const EventAddress = styled.div`
  color: white;
  font-size: 55%;
`;
const SearchLink = styled.a`
  text-decoration: none;
`;

class Events extends Component {
  render() {
    let EventsList = [];

    if (this.props.thedata) {
      let events = this.props.thedata;
      const nextEvent = events[0].dateObject;
      const nextEventMinutes =
        (nextEvent.getMinutes() < 10 ? "0" : "") + nextEvent.getMinutes();
      const nextEventDay =
        (nextEvent.getDate() < 10 ? "0" : "") + nextEvent.getDate();
      const nextEventString = `${nextEvent.getFullYear()}-${nextEvent.getMonth() +
        1}-${nextEventDay}T${nextEvent.getHours()}:${nextEventMinutes}:00`;

      // console.log(nextEventString);
      // console.log("YEAR: " + nextEvent.getFullYear());
      // console.log("MONTH: " + nextEvent.getMonth() + 1);
      // console.log("DAY: " + nextEventDay);
      // console.log("HOURS: " + nextEvent.getHours());
      // console.log("MINUTES: " + nextEventMinutes);

      let arr = [
        // Add the next event
        <div key={99} className="next swatch">
          <CountdownContainer>
            <Countdown date={`${nextEventString}`} width="50%" />
            <BombContainer>
              <img src={Bomb} alt="" width="60%" />
            </BombContainer>
          </CountdownContainer>
          <Event
            pete={false}
            title={events[0].gig_title}
            location={events[0].gig_location_s}
            address={events[0].gig_address_s}
            date={events[0].datestring}
            class={`nextgig`}
            linker={
              "https://www.google.com/search?q=ten+tonne+ska+" +
              events[0].gig_location_s.split(" ").join("+") +
              events[0].datestring.split(" ").join("+")
            }
            // key={999}
          />
        </div>
      ];

      events.shift();

      arr.push(
        events.map(function(item, i) {
          return (
            <Event
              pete={false}
              key={i}
              title={item.gig_title}
              location={item.gig_location_s}
              address={item.gig_address_s}
              date={item.datestring}
              //   class={`swatch gig ${eventClasses[i]}`}
              class={`swatch gig`}
              linker={
                "https://www.google.com/search?q=ten+tonne+ska+" +
                item.gig_location_s.split(" ").join("+") +
                " " +
                item.datestring.split(" ").join("+")
              }
            />
          );
        })
      );
      EventsList = arr;
    }
    return (
      <center>
        <div className="events_container">
          {EventsList}
          {/* <pre className="App--data">{JSON.stringify(events, null, 2)}</pre> */}
        </div>
      </center>
    );
  }
}
const Event = props => (
  //   <SearchLink href="https://www.google.com/search?q=ten+tonne+ska">
  <SearchLink target="_blank" href={props.linker}>
    <div className={props.class}>
      <EventTitle>{props.title}</EventTitle>
      <EventDate>{props.date}</EventDate>
      <EventLocation>{props.location}</EventLocation>
      <EventAddress>{props.address}</EventAddress>
      {props.pete && (
        <PeteContainer>
          <img src={Pete} alt="" width="50%" />
        </PeteContainer>
      )}
    </div>
  </SearchLink>
);
// {
//   "gig_title": "DIG IT!",
//   "gig_location": "<br>The Jolly Farmers",
//   "gig_location_s": "The Jolly Farmers",
//   "gig_address": "<br>7 Purley Rd, Purley CR8 2HA",
//   "gig_address_s": "7 Purley Rd, Purley CR8 2HA",
//   "gig_date": "Fri 28th September",
//   "gig_time": ""
// },

export default Events;
