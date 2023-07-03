/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Text from "../../components/Text/Text";
import { colors} from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";


const Blog = ({ img }) => {
  const screenWidth = getScreenWidth();
  const fontSizeSpan = screenWidth === 'SM' ? '8px' : '12px';
  const headerTextFontSize = screenWidth === 'SM' ? '12px' : '18px';
  const fontSizeStars = screenWidth === 'SM' ? '10px' : '17px';

  const blogData = {
    title: "GIRLS PINK T SHIRT ARRIVED IN STORE",
    author: "Mac Doe",
    time: "1:33 pm",
    date: "DEC 5, 2013",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  };

  const styles = {
    container: {
      padding: "5%",
    },
    infoWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
    },
    headerText: {
      fontSize: headerTextFontSize,
      marginBottom: "15px",
    },
    spanStyle: {
      marginRight: "5px",
      fontSize: fontSizeSpan,
      backgroundColor: "gray",
      color: "white",
      padding: "3px 5px",
      borderRadius: "30px",
    },
    imgStyle: {
      objectFit: "contain",
      width: "100%",
      height: "auto",
    },
    descriptionText: {
      fontSize: "13px",
      marginBottom: "15px",
      marginTop: "15px",
    },
    buttonStyle: {
      padding: "5px 5px",
      backgroundColor: colors.accentColor,
      color: "white",
      fontSize: "14px",
      borderRadius: "2px",
      cursor: "pointer",
      
      border : 'none'
    },
    starIcons: {
      fontSize: fontSizeStars,
      color: colors.accentColor,
      marginRight: "5px",
    },
    mobileInfoWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    ratingWrapper: {
      display: "flex",
      alignItems: "center",
    },
  };

  const isMobile = screenWidth === 'SM';

  return (
    <SimplifiedDiv style={styles.container}>
      <h2 style={styles.headerText}>{blogData.title}</h2>
      <SimplifiedDiv style={styles.infoWrapper}>
        {isMobile ? (
          <SimplifiedDiv style={styles.mobileInfoWrapper}>
            <SimplifiedDiv style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon style={styles.starIcons} />
              <span style={styles.spanStyle}>{blogData.author}</span>
              <AccessTimeIcon style={styles.starIcons} />
              <span style={styles.spanStyle}>{blogData.time}</span>
              <CalendarMonthIcon style={styles.starIcons} />
              <span style={styles.spanStyle}>{blogData.date}</span>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.ratingWrapper}>
              {Array.from({ length: 4 }).map((_, index) => (
                <StarIcon
                  key={index}
                  style={styles.starIcons}
                  className={index < blogData.rating ? "filled" : "empty"}
                />
              ))}
              {blogData.rating % 1 !== 0 && (
                <StarHalfIcon style={styles.starIcons} />
              )}
            </SimplifiedDiv>
          </SimplifiedDiv>
        ) : (
          <>
            <SimplifiedDiv style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon style={styles.starIcons} />
              <span style={styles.spanStyle}>{blogData.author}</span>
              <AccessTimeIcon style={styles.starIcons} />
              <span style={styles.spanStyle}>{blogData.time}</span>
              <CalendarMonthIcon style={styles.starIcons} />
              <span style={styles.spanStyle}>{blogData.date}</span>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.ratingWrapper}>
              {Array.from({ length: 4 }).map((_, index) => (
                <StarIcon
                  key={index}
                  style={styles.starIcons}
                  className={index < blogData.rating ? "filled" : "empty"}
                />
              ))}
              {blogData.rating % 1 !== 0 && (
                <StarHalfIcon style={styles.starIcons} />
              )}
            </SimplifiedDiv>
          </>
        )}
      </SimplifiedDiv>
      <img style={styles.imgStyle} src={img} alt="photo" />
      <Text style={styles.descriptionText}>{blogData.description}</Text>
      <SimplifiedDiv style={{ display: "flex", justifyContent: "flex-start" }}>
        <button style={styles.buttonStyle}>Read More</button>
      </SimplifiedDiv>
    </SimplifiedDiv>
  );
};

export default Blog;


