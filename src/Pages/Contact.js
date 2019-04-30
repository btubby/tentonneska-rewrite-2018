import React, { Fragment,Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ReactGA from "react-ga";

import { Animated } from "react-animated-css";
import { SocialIcon } from 'react-social-icons';

// import { buildUrl } from 'instafeed-lite'
// import instafeed from 'instafeed-lite'

import ReactInstagramFeed from 'react-instagram-feed';

// BT should use https://www.npmjs.com/package/react-instafeed



function initializeReactGA() {
  ReactGA.initialize("UA-131014502-1");
  ReactGA.pageview("/contact");
}

const SocialIconContainer = styled.div`
  padding 0 10px 0 10px;
`;
const Red = styled.div`
  color: red;
  font-size: 85%;
  padding-bottom: 30px;
`;

const SocialContainer = styled.div`
width: 50%;
display:flex;
// border: solid red 1px;
  text-decoration: none;
  color: #ffc703;
  font-size: 75%;
  justify-content: center;
`;

const InstagramFeedContainer = styled.div`
  // display:flex;
  // background-color: red;
`;

class Newsletter extends Component {
  componentDidMount() {
    initializeReactGA();
  }
  
  render() {
    return (
    
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ten Tonne Ska</title>
        </Helmet>
        <center>
        <Animated
            animationIn="slideInUp"
            animationOut="fadeOut"
            isVisible={true}
          >
          <div className="events_container">
            <div className="next swatch">
              <Red>BOOKINGS 07980 743077</Red>
              {/* <Green>SOCIAL:  </Green> */}
              <SocialContainer>
                <SocialIconContainer>
                  <SocialIcon network="instagram" target="_blank" url="https://www.instagram.com/tentonneska/" bgColor="#00bb00" />
                  </SocialIconContainer>
                <SocialIconContainer>
                  <SocialIcon network="facebook" target="_blank" url="https://www.facebook.com/TenTonneSka/" bgColor="#00bb00" />
                </SocialIconContainer>
                <SocialIconContainer>
                  <SocialIcon network="soundcloud" target="_blank" url="https://soundcloud.com/tentonneska" bgColor="#00bb00" />
                </SocialIconContainer>
                <SocialIconContainer>
                  <SocialIcon network="youtube" target="_blank" url="https://www.youtube.com/channel/UCyll8SRJR-gIoQ__o5udO7g" bgColor="#00bb00" />
                </SocialIconContainer>
              </SocialContainer>
            </div>


          <InstagramFeedContainer>
            <ReactInstagramFeed
              accessToken="8663126046.1677ed0.353dfaf52aae4e42943a0f02cf9e33ee"
              count={4}
              // type="user"
              param="self"
              resolution="standard"
              // wrapper="<div className='bb'>"
              hasLink
              // buttonText="Fetch (from inside of ReactInstagramFeed component)"
              // before={() => { console.log('Before fetching feeds'); }}
              // after={() => { console.log('After fetching feeds'); }}
              // forceNext={false}
              />
          </InstagramFeedContainer>




          </div>
          </Animated>
        </center>
      </Fragment>
    );
  }
}
export default Newsletter;
