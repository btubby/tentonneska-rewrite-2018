import React, { Component } from "react";
import styled from "styled-components";
import Countdown from "./Countdown";

const SearchLink = styled.a`
  text-decoration: none;
`;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const eventClasses = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "d",
  "e"
];
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    let sheet_id = "1kE0fM_01RpTDuOYWKASbvK5vwhlTJ35DrsEVeFOKueQ";
    let url =
      "https://spreadsheets.google.com/feeds/list/" +
      sheet_id +
      "/od6/public/values?alt=json";
    console.log("Talking to google sheets [" + url + "]");
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        let a = [];
        var now = new Date();

        responseJson.feed.entry.forEach(function(event, index) {
          let parsed_event = formatEvent(event);
          let dateObject = parseDate(parsed_event.gig_date);

          let hours = dateObject.getHours();
          let am_pm = hours < 12 ? "AM" : "PM"; // Set AM/PM
          hours = hours - 12;
          parsed_event.datestring = `${
            days[dateObject.getDay()]
          }, ${dateObject.getDate()} ${
            months[dateObject.getMonth()]
          } ${dateObject.getFullYear()} ${hours}${am_pm}`;
          parsed_event.dateObject = dateObject;

          if (dateObject >= now) {
            a.push(parsed_event);
            // console.log('gig in future!');
          }
        });
        this.setState({ data: a, loading: false });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    let EventsList = [];
    if (this.state.data) {
      let events = this.state.data;
      const nextEvent = events[0].dateObject;
      const nextEventMinutes = (nextEvent.getMinutes() < 10 ? "0" : "") + nextEvent.getMinutes();
      const nextEventDay = (nextEvent.getDate() < 10 ? "0" : "") + nextEvent.getDate();
      const nextEventString = `${nextEvent.getFullYear()}-${nextEvent.getMonth()+1}-${nextEventDay}T${nextEvent.getHours()}:${nextEventMinutes}:00`;

        // console.log(nextEventString);
        // console.log('YEAR: ' +  nextEvent.getFullYear());
        // console.log("MONTH: " + nextEvent.getMonth() +1);
        // console.log("DAY: " + nextEventDay);
        // console.log("HOURS: " + nextEvent.getHours());
        // console.log("MINUTES: " + nextEventMinutes);

      let arr = [
        // Add the next event
        <div key={99} className="swatch next">
          <div id="countdown_container">
            Time to next gig
            <Countdown date={`${nextEventString}`} />
          </div>
          <Event
            title={events[0].gig_title}
            location={events[0].gig_location_s}
            address={events[0].gig_address_s}
            date={events[0].datestring}
            class={`nextgig`}
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
              class={`swatch gig ${eventClasses[i]}`}
            />
          );
        })
      );
      EventsList = arr;
    }
    return (
      <center>
        <div className="events_container">
          <div className="events_innercontainer">
            {EventsList}
            {/* <pre className="App--data">{JSON.stringify(events, null, 2)}</pre> */}
          </div>
        </div>
      </center>
    );
  }
}
const Event = props => (
  <SearchLink href='https://www.google.com/search?q=ten+tonne+ska'>
    <div className={props.class}>
      <div className="eventtitle">{props.title}</div>
      <div className="event_date">{props.date}</div>
      <div className="eventlocation">{props.location}</div>
      <div className="eventaddress">{props.address}</div>
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
function formatEvent(event) {
  return {
    gig_title: event.gsx$title.$t,
    gig_location:
      typeof event.gsx$venue !== "undefined" ? "<br>" + event.gsx$venue.$t : "",
    gig_location_s:
      typeof event.gsx$venue !== "undefined" ? event.gsx$venue.$t : "",
    gig_address:
      typeof event.gsx$address !== "undefined"
        ? "<br>" + event.gsx$address.$t
        : "",
    gig_address_s:
      typeof event.gsx$address !== "undefined" ? event.gsx$address.$t : "",

    gig_date: typeof event.gsx$date !== "undefined" ? event.gsx$date.$t : "",
    gig_time: typeof event.gsxtime !== "undefined" ? event.gsx$time.$t : ""
  };
}

function parseDate(d) {
  var input = d.split(" ");
  var dateValue = input[0].split(":") + "";
  let timeValue = "";
  if (typeof input[1] === "undefined" || input[1] === null) {
    // console.log("** no time for event, so hardcoding to 9pm");
    timeValue = "21,00";
  } else {
    timeValue = input[1].split(":") + "";
  }
  console.log(`date[${dateValue}] time[${timeValue}]`);
  var datePieces = dateValue.split("/");
  var timePieces = timeValue.split(",");
  //5 numbers specify year, month, day, hour, and minute
  return new Date(
    datePieces[2],
    datePieces[1] - 1,
    datePieces[0],
    timePieces[0],
    timePieces[1]
  );
}
export default Events;
