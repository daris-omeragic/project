import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Text from "../../components/Text/Text";
import { colors, fontSize, fontWeight } from "../../util/theme";


const BlogList = ({ img }) => {
    const styles = {
      container: {
        marginLeft: "50px",
        marginBottom: "40px",
      },
      infoWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      personalWrapper: {
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
      },
      iconsStyle: {
        color: colors.accentColor,
      },
      headerText: {
        fontSize: fontSize.medium,
        fontWeight: fontWeight.mediumBold,
        color: colors.lightBlack,
        marginBottom: "15px",
      },
      spanStyle: {
        marginRight: "5px",
      },
      imgStyle: {
        objectFit: "contain",
        width: "100%",
      },
      descriptionText: {
        fontSize: fontSize.medium,
        marginBottom: "15px",
        marginTop: "15px",
        lineHeight: "1.5",
      },
      buttonStyle: {
        padding: "7px 25px",
        backgroundColor: colors.accentColor,
        color: colors.white,
        fontSize: fontSize.optimal,
        borderRadius: "2px",
        cursor: "pointer",
      },
      buttonWrapper: {
        display: "flex",
        justifyContent: "end",
      },
    };
  
    return (
      <SimplifiedDiv style={styles.container}>
        <Text style={styles.headerText}>GIRLS PINK T SHIRT ARRIVED IN STORE</Text>
        <SimplifiedDiv style={styles.infoWrapper}>
          <SimplifiedDiv style={styles.personalWrapper}>
            <PersonIcon style={styles.iconsStyle} />
            <span style={styles.spanStyle}>Mac Doe</span>
            <AccessTimeIcon style={styles.iconsStyle} />
            <span style={styles.spanStyle}>1:33 pm</span>
            <CalendarMonthIcon style={styles.iconsStyle} />
            <span style={styles.spanStyle}>DEC 5, 2013</span>
          </SimplifiedDiv>
          <SimplifiedDiv>
            <StarIcon style={styles.iconsStyle} />
            <StarIcon style={styles.iconsStyle} />
            <StarIcon style={styles.iconsStyle} />
            <StarIcon style={styles.iconsStyle} />
            <StarHalfIcon style={styles.iconsStyle} />
          </SimplifiedDiv>
        </SimplifiedDiv>
        <img style={styles.imgStyle} src={img} alt="photo" />
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod facilis
          reprehenderit perspiciatis facere sint accusantium molestiae? Dolorum,
          aut harum! Vitae distinctio ea laudantium dicta quam quos debitis rem
          illo labore.
        </Text>
        <SimplifiedDiv style={styles.buttonWrapper}>
          <PrimaryButton style={styles.buttonStyle}>Read More</PrimaryButton>
        </SimplifiedDiv>
      </SimplifiedDiv>
    );
  };
  
  
  export default BlogList;


