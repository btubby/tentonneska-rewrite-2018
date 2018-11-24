import React from "react";
import { Helmet } from "react-helmet";
// import Events from '../Components/Events';
import CapturedAddresses from "../Components/CapturedAddesses";
import styled from "styled-components";

const Ben = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  width: 80%;
  font-size: 40px;
`;
// import backgroundImage from "../Assets/ttsBomb.jpg";
export default class Live extends React.Component {
  componentWillMount() {
    // document.body.style.backgroundColor = "black";
    // document.body.style.backgroundImage = `url(${backgroundImage})`;
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ten Tonne Ska</title>
          <link
            href="http://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
            type="text/css"
          />
        </Helmet>
        <Ben>
          <CapturedAddresses />
        </Ben>
      </div>
    );
  }
}
