import React from "react";
// import facebook_logo from "../Assets/facebook.png";
// import instagram_logo from "../Assets/instagram.png";
import styled from "styled-components";
import { push as Menu } from "react-burger-menu";

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
  left: 20px;
  z-index: 200;
  font-weight: bold;
  color: red;
  @media (min-width: 768px) {
    color: white;
    font-size: 2em;
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
    // let styles = {
    //   bmBurgerButton: {
    //     position: "fixed",
    //     width: "26px",
    //     height: "20px",
    //     right: "36px",
    //     top: "30px"
    //   },
    //   bmBurgerBars: { background: "#373a47" },
    //   bmCrossButton: { 
    //     height: "24px", 
    //     width: "24px",
    //     right: "36px",
    //     top: "29px" 
    //   },
    //   bmCross: { background: "#bdc3c7" },
    //   bmMorphShape: { fill: "#fff63f" },
    //   bmOverlay: { background: "rgba(0, 0, 0, 0.3)" }
    // };
    return (
      <Menu
        right
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        width={ '25%' }
      >
        <SidebarMenu/>
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

        <MenuItem>
          <a href="http://tubbycreative.com/sounds/" target="_blank">
            GEEZER2
          </a>
        </MenuItem>
    
      </Menu>
    );
  }
}
export default Sidebar;
