
import React from "react";

const CustomDiv = ({
  children,
  width,
  height,
  borderRadius,
  border,
  padding,
  margin,
  bgColor,
  display,
  justifyContent,
  justifyItems,
  alignItems,
  alignContent,
  textAlign,
  letterSpacing,
  borderBottom,
}) => {
  const divWidth = width ? width : "auto";
  const divHeight = height ? height : "auto";
  const divBR = borderRadius ? borderRadius : 0;
  const divBorder = border ? border : "0px";
  const divMargin = margin ? margin : 0;
  const divPadding = padding ? padding : 0;
  const backgroundColor = bgColor ? bgColor : "inherit";
  const disp = display ? display : "block";
  const jc = justifyContent ? justifyContent : "flex-start";
  const ji = justifyItems ? justifyItems : "center";
  const ai = alignItems ? alignItems : "center";
  const ac = alignContent ? alignContent : "center";
  const ta = textAlign ? textAlign : 'left';
  const ls = letterSpacing ? letterSpacing : '0px';
  const bb = borderBottom ? borderBottom : '0px';


  return (
    <div
      style={{
        width: divWidth,
        height: divHeight,
        borderRadius: divBR,
        border: divBorder,
        margin: divMargin,
        padding: divPadding,
        backgroundColor: backgroundColor,
        display: disp,
        justifyContent: jc,
        justifyItems: ji,
        alignContent: ac,
        alignItems: ai,
        textAlign: ta,
        letterSpacing: ls,
        borderBottom :bb,
      }}
    >
      {children}
    </div>
  );
};

export default CustomDiv;