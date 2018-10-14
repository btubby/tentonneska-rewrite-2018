import React from "react";
import { Helmet } from "react-helmet";
import Events from "../Components/Events";

export default class Live extends React.Component {
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
        </Helmet>

        <Events />
      </div>
    );
  }
}
