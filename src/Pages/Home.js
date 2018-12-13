import React from "react";
import Events from "../Components/Events/Events";
import Loader from "../Components/Loader";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-131014502-1");
  ReactGA.pageview("/homepage");
}
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

export default class Live extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    // this.formatEvent = this.formatEvent.bind(this);
  }

  getGoogleSheetData(sheet_id) {
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

  componentDidMount() {
    initializeReactGA();
    this.setState({ loading: true });
    let sheet_id = "1kE0fM_01RpTDuOYWKASbvK5vwhlTJ35DrsEVeFOKueQ";
    this.getGoogleSheetData(sheet_id);
  }
  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <div>
        <Events thedata={this.state.data} />
      </div>
    );
  }
}

// ############################################################################

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
