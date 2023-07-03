import React,{useState} from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontFamily, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Text from "../../components/Text/Text";
import { getScreenWidth } from "../../util/helpers";





const SocialIcons = () => {
  const iconStyles = [
    {
      icon: <TwitterIcon />,
      baseColor: "gray",
      hoverColor: colors.white,
      baseBackground: "transparent",
      hoverBackground: "lightblue",
    },
    {
      icon: <InstagramIcon />,
      baseColor: "gray",
      hoverColor: colors.white,
      baseBackground: "transparent",
      hoverBackground: "pink",
    },
    {
      icon: <FacebookIcon />,
      baseColor: "gray",
      hoverColor: "white",
      baseBackground: "transparent",
      hoverBackground: "blue",
    },
  ];

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconMouseEnter = (index) => {
    setHoveredIcon(index);
  };

  const handleIconMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <>
      {iconStyles.map((style, index) => (
        <div
          key={index}
          className="social-icon"
          onMouseEnter={() => handleIconMouseEnter(index)}
          onMouseLeave={handleIconMouseLeave}
        >
          {React.cloneElement(style.icon, {
            style: {
              fontSize: fontSize.normal,
              color: hoveredIcon === index ? style.hoverColor : style.baseColor,
              margin: "0px 10px",
              backgroundColor:
                hoveredIcon === index ? style.hoverBackground : style.baseBackground,
            },
          })}
        </div>
      ))}
    </>
  );
};



const screenWidth = getScreenWidth();
export const alignItemsInFirstDiv = screenWidth === "SM" ? "center" : "flex-start";
export const alignItemsInSecondDiv = screenWidth === "SM" ? "center" : "flex-end";
export const paddingInDiv = screenWidth === "SM" ? "10px 0px" : "0px";
export const topDivHeight = screenWidth === "SM" ? "auto" : "30px";
export const responsivePadding =
  screenWidth === "SM" ? "0px" : screenWidth === "MD" ? "0px" : "0px 10%";

  const TopRow = () => {

// styles.js


   /* Koristi prop za definisanje boje hover efekta */

  return (
    <CustomDiv
      bgColor={colors.secondColor}
      display='flex'
      width='100%'
      height={topDivHeight}
      padding={responsivePadding}
      border='0px'
      alignItems='center'
    >
      <Grid container direction='row'>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <CustomDiv
            display='flex'
            alignItems='center'
            justifyContent={alignItemsInFirstDiv}
            padding={paddingInDiv}
          >
            <PhoneIcon
              style={{
                fontSize: fontSize.normal,
                color : colors.gray,
              }}
            />
            <Text fontFamily={fontFamily.LatoRegular} fontSize={fontSize.small} color={colors.gray}>
              +38163333333
            </Text>
            <CustomDiv
              display='flex'
              alignItems='center'
              margin='0px 0px 0px 15px'
            >
              <EmailIcon
                style={{
                  fontSize: fontSize.normal,
                  color : colors.gray,
                }}
              />
              <Text
                fontFamily={fontFamily.LatoRegular}
                fontSize={fontSize.small}
                color = {colors.gray}
              >
                info@mail.com
              </Text>
            </CustomDiv>
          </CustomDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CustomDiv
            display='flex'
            alignItems='center'
            justifyContent={alignItemsInSecondDiv}
            padding={paddingInDiv}
          >
            <SocialIcons />
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;