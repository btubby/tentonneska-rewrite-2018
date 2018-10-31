import React from "react";

import { push as Menu } from "react-burger-menu";
// import facebook_logo from "../Assets/facebook.png";
// import instagram_logo from "../Assets/instagram.png";

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    let styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "26px",
        height: "20px",
        right: "36px",
        top: "46px"
      },
      bmBurgerBars: { background: "#373a47" },
      bmCrossButton: { 
        height: "24px", 
        width: "24px",
        right: "36px",
        top: "29px" 
      },
      bmCross: { background: "#bdc3c7" },

      bmMorphShape: { fill: "#fff63f" },

      bmOverlay: { background: "rgba(0, 0, 0, 0.3)" }
    };
    return (
      <Menu
        right
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        width={ '25%' }
      >
        <div id="sidebar_bottom">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/TenTonneSka?fref=ts"
          >
            {/* <img src={facebook_logo} alt="Logo" width="20%" /> */}
          </a>
          {/* <a target="_blank" 
          rel="noopener noreferrer"
          href="#">
            <img src={instagram_logo} alt="Logo" width="20%" />
          </a> */}
        </div>
       
        <a id="Live" className="menu-item" href="/">
          LIVE
        </a>
        <a id="Media" className="menu-item" href="/media">
          MEDIA
        </a>
        <a id="News" className="menu-item" href="/news">
          CONTACT
        </a>
        <a className="menu-item" href="http://tubbycreative.com/sounds/" target="_blank">
          GEEZER
        </a>
        <a id="Test" className="menu-item" href="/test">
          tmp
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="#">
          Settings
        </a> */}
      </Menu>
    );
  }
}
export default Sidebar;
