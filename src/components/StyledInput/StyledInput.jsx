import React from "react";
import "./StyledInput";
import "./StyledInput.css"

const StyledInput = (props) => {
  return <input onChange={props.onChangeHandler} value={props.value} />;
};




export default StyledInput;
