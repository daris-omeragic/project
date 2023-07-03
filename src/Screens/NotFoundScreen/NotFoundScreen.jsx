/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import error from "../../assets/images/404/404.png";
import Logo from "../../assets/images/logo.png";
import { colors, fontSize } from '../../util/theme';
import { Link } from 'react-router-dom';
import { getScreenWidth } from '../../util/helpers';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';

const NotFoundScreen= () => {
  const screenWidth = getScreenWidth();
  const justifyContent = screenWidth === "SM" ? "start" : "center";
  const height = screenWidth === 'SM' ? '40vh' : '100vh';
  const padding = screenWidth === 'SM' ? '20px 50px' : '30px 100px';
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: justifyContent,
    height: height,
  };

  const smallImageStyle = {
    width: "50%",
    height: '30px',
    marginTop: "40px",
    objectFit: 'contain'
  };

  const largeImageStyle = {
    width: "50%",
  };

  return (
    <>
      <SimplifiedDiv style={containerStyle}>
        <img src={Logo} alt="photo" style={smallImageStyle} />
        <img src={error} alt="photo" style={largeImageStyle} />
      </SimplifiedDiv>
      <SimplifiedDiv style={{ ...containerStyle, height: '30vh' }}>
        {screenWidth === 'SM' ? <h4>OPPS! We Couldn’t Find this Page</h4> : <h1>OPPS! We Couldn’t Find this Page</h1>}
        <span style={{ padding: '0px 10px' }}>Uh... So it looks like you broke something. The page you are looking for has up and vanished.</span>
        <Link to="/" style={{ padding: padding, margin: '10px', background: colors.accentColor, border: 'none', color: colors.white, fontSize: fontSize.large }}>
          Bring me back Home
        </Link>
      </SimplifiedDiv>
    </>
  );
};
export default NotFoundScreen;