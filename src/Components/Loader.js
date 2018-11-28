import React from "react";
import LoaderImg from "../Assets/TTSTurntable.png";

class Loader extends React.Component {
  render() {
    return (
      <div className="loading">
        <img id="spinner" alt="" src={LoaderImg} />
      </div>
    );
  }
}

export default Loader;
