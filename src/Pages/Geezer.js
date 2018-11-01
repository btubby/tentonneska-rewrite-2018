import React from "react";
// import { Helmet } from "react-helmet";
// import backgroundImage from "../Assets/ttsBomb.jpg";
import Iframe from 'react-iframe';

export default class Live extends React.Component {


  componentWillMount() {
    document.body.style.backgroundColor = "black";
    // document.body.style.backgroundImage = `url(${backgroundImage})`;
  }
  
  //https://stackoverflow.com/questions/33913737/inserting-the-iframe-into-react-component 
  
  render() {
    return (
      <div className="events_container">
        <div className="swatch">GEEZER</div>
<p>


</p>
          <Iframe url="http://tubbycreative.com/sounds/"
            width="84%"
            height="1000px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />

      </div>
      
      
      );
    }
  }