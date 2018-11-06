import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Pages/Home";
import Live from "./Pages/Live";
import Media from "./Pages/Media";
import Newsletter from "./Pages/Newsletter";
import Test from "./Pages/Test";
import Geezer from "./Pages/Geezer";

import styled from "styled-components";

import Sidebar from "./Components/Sidebar";
import { Helmet } from "react-helmet";
// const REACT_VERSION = React.version;

const Header = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  height: 77px;
  width: 100%;
  z-index: 100;
  opacity: 1;
`;
const BestBand = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  position: absolute;
  top: 27px;
  left: 20px;
  z-index: 200;
  font-weight: bold;
  color: red;
  @media (min-width: 768px) {
    /* background: mediumseagreen; */
    color: white;
    font-size: 25px;
  }
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: yellow;
    }
  }
`;

class App extends Component {
  
  render() {
    return (
      <div id="outer-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ten Tonne Ska</title>
          <link
            href="https://fonts.googleapis.com/css?family=Oswald"
            rel="stylesheet"
          />
          <link href="http://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
        </Helmet>

        {/* <Sidebar /> */}
        <main id="page-wrap">
          <Header>
            <BestBand>
              <a href="/">THE BEST SKA BAND IN SE26</a>
            </BestBand>
          </Header>
          <Route exact={true} path={"/"} component={Home} />
          <Route exact={true} path={"/live"} component={Live} />
          <Route exact={true} path={"/media"} component={Media} />
          <Route exact={true} path={"/news"} component={Newsletter} />
          <Route exact={true} path={"/geezer"} component={Geezer} />
          <Route exact={true} path={"/test"} component={Test} />
        </main>
      </div>
    );
  }
}

export default App;
