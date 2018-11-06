import React from "react";
import { Helmet } from "react-helmet";
import Events from "../Components/Events";

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
          <link
            href="https://fonts.googleapis.com/css?family=Oswald"
            rel="stylesheet"
          />
          <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        </Helmet>

        <Events />
      </div>
    );
  }
}

