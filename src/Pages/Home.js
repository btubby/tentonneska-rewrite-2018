import React from "react";
import { Helmet } from "react-helmet";
import Events from "../Components/Events";
import CaptureEmailAddress from "../Components/CaptureEmailAddress";

// import backgroundImage from "../Assets/ttsBomb.jpg";
export default class Live extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "black";
    // document.body.style.backgroundImage = `url(${backgroundImage})`;
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ten Tonne Ska</title>
        </Helmet>
        {/* <CaptureEmailAddress /> */}
        <Events />
      </div>
    );
  }
}
