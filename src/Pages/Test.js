import React, { Component } from "react";

// import Button from "../components/Button";

// import { database } from "../firebase";
import { Helmet } from "react-helmet";

import CaptureEmailAddress from "../Components/CaptureEmailAddress";

//import { css } from "react-emotion";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

class Newsletter extends Component {
  
  
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GIGS PAGE</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="events_container">
          <div className="swatch">
            <CaptureEmailAddress />
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
