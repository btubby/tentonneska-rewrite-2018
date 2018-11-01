import React from "react";

import { push as M } from "react-burger-menu";
// import facebook_logo from "../Assets/facebook.png";
// import instagram_logo from "../Assets/instagram.png";
import styled from "styled-components";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px"
  },
  bmCrossButton: { 
    height: "24px", 
    width: "24px",
    right: "35px",
    top: "32px",
  },
  bmBurgerBars: { background: "#373a47" },
  bmCross: { background: "#bdc3c7" },
  bmMorphShape: { fill: "#fff63f" },
  bmOverlay: { background: "rgba(0, 0, 0, 0.3)" }
};

const SidebarMenu = styled.div`
  position: absolute;
  top: 9px;
  height: 30px;
`;

const MenuItem = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  /* position: absolute; */
  /* top: 27px; */
  left: 20px;
  z-index: 200;
  font-weight: bold;
  color: red;
  @media (min-width: 768px) {
    /* background: mediumseagreen; */
    color: white;
    font-size: 3rem;
  }
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: yellow;
    }
  }
`;

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
 
    return (
      <M
        right
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <SidebarMenu>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/TenTonneSka?fref=ts"
            >
            <img src={facebook_logo} alt="Logo" width="20%" />
          </a> */}
          {/* <a target="_blank" 
          rel="noopener noreferrer"
          href="#">
            <img src={instagram_logo} alt="Logo" width="20%" />
          </a> */}
       
        </SidebarMenu>
        <MenuItem>
          <a id="Live"  href="/">
            LIVE
          </a>
        </MenuItem>
        <MenuItem>
          <a id="Media"  href="/media">
            MEDIA
          </a>
        </MenuItem>
        <MenuItem>
          <a id="News"  href="/news">
            CONTACT
          </a>
        </MenuItem>
        <MenuItem>
          <a id="News"  href="/geezer">
            GEEZER
          </a>
        </MenuItem>

        {/* <a onClick={this.showSettings} className="menu-item--small" href="#">
          Settings
        </a> */}
      </M>
    );
  }
}
export default Sidebar;
