import React from "react";

const Loading = () => {
  return (
    <div>
      <img src={require("./loading-icon.png")} className="loadingIcon"  alt="load"/>
    </div>
  );
};

export default Loading;