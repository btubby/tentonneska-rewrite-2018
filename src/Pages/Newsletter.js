import React, { Component } from "react";
// import { database } from "../firebase";
import { Helmet } from "react-helmet";
import CaptureEmailAddress from "../Components/CaptureEmailAddress";

class Newsletter extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ten Tonne Ska</title>
          <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        </Helmet>

        <center>
          <div className="events_container">
            <div className="swatch">
              <p>
                Bookings
                07980 743077
                {/* <img width='70%' src='http://tubbycreative.com/tts/headers/Bookdaband.png' /> */}
              <br/>
              OR GET IN TOUCH VIA OUR <a target='_blank' href='https://www.facebook.com/TenTonneSka' rel="noopener noreferrer">FACEBOOK PAGE
              </a></p>

              <CaptureEmailAddress />

            </div>
          </div>

        </center>
      </div>
    );
  }
}
export default Newsletter;
