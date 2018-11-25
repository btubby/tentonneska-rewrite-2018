import React from "react";
import LoaderImg from "../Assets/TTSTurntable.png";

class Loader extends React.Component {
  render() {
    return (
      <div class="loading">
        <img id="spinner" alt="" src={LoaderImg} />
      </div>
    );
  }
}

export default Loader;
