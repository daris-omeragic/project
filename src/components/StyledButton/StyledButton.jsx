import React from "react";
//mport "./styledButton.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const StyledButton = ({ onClickHandler, innerText }) => {
  return <PrimaryButton onClick={onClickHandler}>{innerText}</PrimaryButton>;
};

export default StyledButton;