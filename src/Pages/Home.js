import React from "react";
import Events from "../Components/Events/Events";
import Loader from "../Components/Loader";
import ReactGA from "react-ga";
import CaptureEmailAddress from "../Components/CaptureEmailAddress";

import styled from "styled-components";

const Container = styled.div`
  display: flex
  flex-direction: column;

  // @media (min-width: 768px) {
  //   flex-direction: row;
  // }
`;
const EmailHarvestContainer = styled.div`
  width: 100%;
  // border 1px solid red;

  // @media (min-width: 768px) {
  //   width: 40%;
  // }
`;
const GigsContainer = styled.div`
  width: 100%;
  // border 1px solid green;

  // @media (min-width: 768px) {
  //   width: 60%;
  // }
`;

const Yellow = styled.div`
  color: #ffc703;
  font-size: 75%;
  text-align: center;
`;

const Swatch = styled.div`
  // position: fixed;
  // width: 30%;
  margin-top: 20px !important;
  margin-bottom: 4px !important;
  margin-left: 20px;
  margin-right: 20px;

  padding-top: 10px;
  padding-right: 30px !important;
  padding-bottom: 10px !important;
  padding-left: 30px !important;

  color: white;
  background-color: rgba(0, 0, 0, 0.8);

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  font-family: "Oswald", sans-serif;
  font-size: 5vw;

  // @media (min-width: 768px) {
  //   position: relative;
  //   width: 30%;
  // }
`;

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
    this.state = {loading: true};
  }

  getGoogleSheetData(sheet_id) {
    let url= "https://sheets.googleapis.com/v4/spreadsheets/" + sheet_id + "/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=AIzaSyAolId7xBe6uh4ShlBnD09XvUX0hISV93U&alt=json";
    console.log("Talking to google sheets [" + url + "]");
    fetch(url).then(response => response.json()).then(data => {
        var now = new Date();
        console.log('parsing...');
        let batchRowValues = data.valueRanges[0].values;
        console.log(batchRowValues);
        const rows = [];
        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject = {};
          for (let j = 0; j < batchRowValues[i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
          }
          var parts = rowObject.DATE.split("/");
          let dateObject = new Date(parts[1]+'/'+parts[0]+'/'+parts[2]);
          dateObject.setHours(21); // HARDCODE 9pm at the moment BT 
          // dateObject.setMinutes(0);  


          // let hours = dateObject.getHours();
          // let am_pm = hours < 12 ? "AM" : "PM"; // Set AM/PM
          // hours = hours - 12;
          rowObject.datestring = `${
            days[dateObject.getDay()]
          }, ${dateObject.getDate()} ${
            months[dateObject.getMonth()]
          } ${dateObject.getFullYear()} 9pm`;

          console.log(`datestring  ${rowObject.datestring}`);
          rowObject.dateObject = dateObject;

          if (dateObject >= now) { // we are not interested in historical gigs
            rows.push(rowObject);
          }
        }

        this.setState({ data: rows, loading: false });
        console.log("ALL DATA:", rows)
      })
      .catch(error => {
        console.error('Caught an error: ' + error);
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
      <Container>
        <EmailHarvestContainer>
          <Swatch>
            <Yellow>Get on the mailing list!</Yellow>
            <CaptureEmailAddress />
            {/* <img width='70%' src='http://tubbycreative.com/tts/headers/Bookdaband.png' /> */}
          </Swatch>
        </EmailHarvestContainer>
        <GigsContainer>
          <Events futureGigs={this.state.data} />
        </GigsContainer>
      </Container>
    );
  }
}

// ############################################################################

// function formatEvent(event) {
//   console.log('event ' + event);

//   return {
//     gig_title: event.gsx$title.$t,
//     gig_location:
//       typeof event.gsx$venue !== "undefined" ? "<br>" + event.gsx$venue.$t : "",
//     gig_location_s:
//       typeof event.gsx$venue !== "undefined" ? event.gsx$venue.$t : "",
//     gig_address:
//       typeof event.gsx$address !== "undefined"
//         ? "<br>" + event.gsx$address.$t
//         : "",
//     gig_address_s:
//       typeof event.gsx$address !== "undefined" ? event.gsx$address.$t : "",

//     gig_date: typeof event.gsx$date !== "undefined" ? event.gsx$date.$t : "",
//     gig_time: typeof event.gsxtime !== "undefined" ? event.gsx$time.$t : ""
//   };
// }
// function parseDate(d) {
//   var input = d.split(" ");
//   var dateValue = input[0].split(":") + "";
//   let timeValue = "";
//   if (typeof input[1] === "undefined" || input[1] === null) {
//     // console.log("** no time for event, so hardcoding to 9pm");
//     timeValue = "21,00";
//   } else {
//     timeValue = input[1].split(":") + "";
//   }
//   console.log(`date[${dateValue}] time[${timeValue}]`);
//   var datePieces = dateValue.split("/");
//   var timePieces = timeValue.split(",");
//   //5 numbers specify year, month, day, hour, and minute
//   return new Date(
//     datePieces[2],
//     datePieces[1] - 1,
//     datePieces[0],
//     timePieces[0],
//     timePieces[1]
//   );
// }
