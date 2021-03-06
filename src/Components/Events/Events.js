import React, { Component } from "react";
import styled from "styled-components";
import Countdown from "../Countdown";

import Bomb from "../../Assets/bombyellow.gif";
import { Animated } from "react-animated-css";

const BombContainer = styled.div`
  position: absolute;
  top: 2vw;
  left: -6vw;
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
const EventDateNext = styled.div`
  color: white;
  font-size: 40%;
`;
const EventDate = styled.div`
  color: red;
  font-size: 110%;
`;
const EventTitle = styled.div`
  color: #ffc703;
  font-size: 90%;
`;
const EventLocation = styled.div`
  color: #00bb00;
`;
const EventLocationNext = styled.div`
  font-size: 60%;
  color: #00bb00;
`;
const EventAddress = styled.div`
  color: white;
`;
const EventAddressNext = styled.div`
  color: white;
  font-size: 55%;
`;
const SearchLink = styled.a`
  text-decoration: none;
`;

class Events extends Component {
  render() {
    let EventsList = [];

    if (this.props.futureGigs) {
      let events = this.props.futureGigs;
      const nextEvent = events[0].dateObject;
      console.log("next gig:", events[0]);
      
      const nextEventMinutes =
        (nextEvent.getMinutes() < 10 ? "0" : "") + nextEvent.getMinutes();
      const nextEventDay =
        (nextEvent.getDate() < 10 ? "0" : "") + nextEvent.getDate();
      const nextEventMonth = nextEvent.getMonth() + 1;
      const formattednextEventMonth = ("0" + nextEventMonth).slice(-2);

      const nextEventString = `${nextEvent.getFullYear()}-${formattednextEventMonth}-${nextEventDay}T${nextEvent.getHours()}:${nextEventMinutes}:00`;

      console.log("nextEventDay", nextEventDay);
      console.log("nextEventString", nextEventString);
      let arr = [
        // Add the next event
        <div key={99} className="next swatch">
          <CountdownContainer>
            <Countdown date={`${nextEvent}`} width="50%" />
            <BombContainer>
              <img src={Bomb} alt="" width="50%" />
            </BombContainer>
          </CountdownContainer>
          <Event
            title={events[0].TITLE}
            location={events[0].VENUE}
            address={events[0].ADDRESS}
            date={events[0].datestring}
            class={`nextgig`}
            nextgig={true}
            linker={
              "https://www.google.com/search?q=ten+tonne+ska+" +
              events[0].VENUE.split(" ").join("+") +
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
              title={item.TITLE}
              location={item.VENUE}
              address={item.ADDRESS}
              date={item.datestring}
              class={`swatch gig`}
              nextgig={false}
              linker={
                "https://www.google.com/search?q=ten+tonne+ska+" +
                item.VENUE.split(" ").join("+") +
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

      {props.nextgig && <EventDateNext>{props.date}</EventDateNext>}
      {props.nextgig || <EventDate>{props.date}</EventDate>}

      {props.nextgig && <EventLocationNext>{props.location}</EventLocationNext>}
      {props.nextgig || <EventLocation>{props.location}</EventLocation>}

      {props.nextgig && <EventAddressNext>{props.address}</EventAddressNext>}
      {props.nextgig || <EventAddress>{props.address}</EventAddress>}
    </div>
  </SearchLink>
);
export default Events;
