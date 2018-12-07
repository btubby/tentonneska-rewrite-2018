import React, { Component } from "react";
import styled from "styled-components";
import Countdown from "./Countdown";

import Bomb from "../Assets/bomb_coloured.gif";
import { Animated } from "react-animated-css";

const BombContainer = styled.div`
  position: absolute;
  top: 2vw;
  left: -12vw;
  // text-align: right;
  z-index: 200;
  width: 50%;
`;
const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 74%;
  height: 8vw;
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

      let arr = [
        // Add the next event
        <div key={99} className="next swatch">
          <CountdownContainer>
            <Countdown date={`${nextEventString}`} width="50%" />
            <BombContainer>
              <img src={Bomb} alt="" width="80%" />
            </BombContainer>
          </CountdownContainer>
          <Event
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
              key={i}
              title={item.gig_title}
              location={item.gig_location_s}
              address={item.gig_address_s}
              date={item.datestring}
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
          <Animated
            animationIn="slideInUp"
            animationOut="fadeOut"
            isVisible={true}
          >
            {EventsList}
          </Animated>

          {/* <pre className="App--data">{JSON.stringify(events, null, 2)}</pre> */}
        </div>
      </center>
    );
  }
}
const Event = props => (
  <SearchLink target="_blank" href={props.linker}>
    <div className={props.class}>
      <EventTitle>{props.title}</EventTitle>
      <EventDate>{props.date}</EventDate>
      <EventLocation>{props.location}</EventLocation>
      <EventAddress>{props.address}</EventAddress>
    </div>
  </SearchLink>
);
export default Events;
