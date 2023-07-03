import React from "react";
import { colors,fontWeight,fontSize } from "../../util/theme";
import { Grid } from "@mui/material";
import Text from "../Text/Text";
import CategoryTab from "../../Templates/CategoryTab/CategoryTab";
import SimplifiedDiv from "../SimplifiedDiv/SimplifiedDiv";
import Blog from "../../Templates/Blog/Blog";
import product1 from "../../assets/images/Blog/blog-one.jpg";
import product2 from "../../assets/images/Blog/blog-two.jpg";
import product3 from "../../assets/images/Blog/blog-three.jpg";
import { getScreenWidth } from "../../util/helpers";

const BlogPage = () => {
    const styles = {
      container: {
        padding: "2% 10%",
      },
      headingText: {
        fontSize: fontSize.medium,
        color: colors.accentColor,
        fontWeight: fontWeight.mediumBold,
        textAlign : 'center',
        marginBottom: "20px",
        marginTop : '55px'
      },
    };
  
    const screenWidth = getScreenWidth()
    const marginLeft = screenWidth === 'SM' ? '30px' : '0px';
    return (
      <>
        <Grid xs={12} sm={12} md={12} lg={12} container style={styles.container}>
          <Grid xs={8} sm={12} md={12} lg={3} style = {{marginLeft : marginLeft}}>
            <Text style={styles.headingText}>Category</Text>
            <CategoryTab />
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={9}>
            <SimplifiedDiv>
              <Blog img={product1} />
              <Blog img={product2} />
              <Blog img={product3} />
            </SimplifiedDiv>
          </Grid>
        </Grid>
      </>
    );
  };
  
  export default BlogPage;