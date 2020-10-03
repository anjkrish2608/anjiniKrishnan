import React from "react";

function Cols(props) {
  const size = props.size;;

  return <div className={size} {...props} />;
}

export default Cols;
