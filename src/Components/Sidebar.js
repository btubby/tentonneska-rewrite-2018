import React from "react";

import { pushRotate as M } from "react-burger-menu";
import facebook_logo from "../Assets/facebook.png";
import instagram_logo from "../Assets/instagram.png";

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    let styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        right: "36px",
        top: "36px"
      },
      bmBurgerBars: { background: "#373a47" },
      bmCrossButton: { height: "24px", width: "24px" },
      bmCross: { background: "#bdc3c7" },

      bmMorphShape: { fill: "#fff63f" },

      bmOverlay: { background: "rgba(0, 0, 0, 0.3)" }
    };
    return (
      <M
        right
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <div id="sidebar_bottom">
          <a
            target="_blank"
            href="https://www.facebook.com/TenTonneSka?fref=ts"
          >
            <img src={facebook_logo} alt="Logo" width="20%" />
          </a>
          <a target="_blank" href="#">
            <img src={instagram_logo} alt="Logo" width="20%" />
          </a>
        </div>
        <a id="Home" className="menu-item" href="/">
          Home
        </a>
        <a id="Live" className="menu-item" href="/live">
          Live
        </a>
        <a id="Media" className="menu-item" href="/media">
          Media
        </a>
        <a id="News" className="menu-item" href="/news">
          NewsLetter
        </a>

        <a id="Test1" className="menu-item" href="/test">
          Test
        </a>
        <a href="http://tubbycreative.com/sounds/" target="_blank">
          Pete Sim
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="#">
          Settings
        </a> */}
      </M>
    );
  }
}
export default Sidebar;
