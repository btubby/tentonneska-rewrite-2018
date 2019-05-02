import React, { Component } from "react";
import { Route } from "react-router-dom";

// import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Media from "./Pages/Media";
import Media2 from "./Pages/Media2";
import Contact from "./Pages/Contact";
import HarvestedEmails from "./Pages/HarvestedEmails";
import Pete from "./Pages/Pete";
import Pete2 from "./Pages/Pete2";

import styled from "styled-components";
import { Helmet } from "react-helmet";



const PageContainer = styled.div`
  position: relative;
  // top: 78px;
  width: 100%;
  border: red;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  `;
  const Header = styled.div`
  background-color: black;
  height: 77px;
  width: 100%;
  z-index: 100;
  opacity: 1;
  `;
  const Header2 = styled.div`
  display: flex;
  background-color: #ffc703;
  height: 30px;
  width: 100%;
  z-index: 100;
  opacity: 1;
`;
const HeaderItem = styled.div`
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: red;
    }
  }
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding-left: 26px;
  padding-top: 5px;

  color: black;
`;

const BestBand = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  position: absolute;
  top: 27px;
  left: 20px;
  z-index: 200;
  font-weight: bold;
  color: white;

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

const Images = [
  "http://tubbycreative.com/TTSbacking0.jpg",
  // "http://tubbycreative.com/TTSbacking1.jpg",
  "http://tubbycreative.com/TTSbacking2.jpg",
  "http://tubbycreative.com/TTSbacking3.jpg",
  "http://tubbycreative.com/TTSbacking4.jpg",
  "http://tubbycreative.com/TTSbacking5.jpg",
  "http://tubbycreative.com/TTSbacking6.jpg",
  "http://tubbycreative.com/TTSbacking7.jpg",
  "http://tubbycreative.com/tts/TTSTuesFin.jpg"
];

const Container = styled.div`
  // background-image: url('${
    Images[Math.floor(Math.random() * Images.length)]
  }');
`;

export default class App extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url(${
      Images[Math.floor(Math.random() * Images.length)]
    })`;
    document.title = "Ten Tonne Ska - THE BEST SKA AND REGGAE IN SE26";
  }

  render() {
    return (
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ten Tonne Ska - THE BEST SKA AND REGGAE IN SE26</title>
          <link
            href="https://fonts.googleapis.com/css?family=Oswald"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Helmet>

        {/* <Sidebar /> */}
        <main id="page-wrap">
          <HeaderContainer>
            <Header>
              <BestBand>
                <a href="/">THE BEST SKA AND REGGAE IN SE26</a>
              </BestBand>
            </Header>
            <Header2>
              <HeaderItem>
                <a href="/">GIGS</a>
              </HeaderItem>
              <HeaderItem>
                <a href="/media">MEDIA</a>
              </HeaderItem>
              <HeaderItem>
                 <a href="/pete">
                  PLAY
                </a> 
              </HeaderItem>
              <HeaderItem>
                <a href="/contact">CONTACT</a>
              </HeaderItem>


             
            </Header2>
          </HeaderContainer>
          <PageContainer>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/media"} component={Media} />
            <Route exact path={"/media2"} component={Media2} />

            <Route exact path={"/contact"} component={Contact} />

            <Route exact path={"/pete"} component={Pete} />
            <Route exact path={"/pete2"} component={Pete2} />

            <Route exact path={"/harvested"} component={HarvestedEmails} />
          </PageContainer>
        </main>
      </Container>
    );
  }
}
