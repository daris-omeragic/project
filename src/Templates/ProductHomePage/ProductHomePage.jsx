import React from "react";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import CategoryTab from "../CategoryTab/CategoryTab";
import { colors, fontSize, fontWeight } from "../../util/theme";
import ArticlesHomePage from "../ArticlesHomePage/ArticlesHomePage";
import SuggestedCarousel from "../SuggestedCarousel/SuggestedCarousel";
import { getScreenWidth } from "../../util/helpers";






const ProductsHomePage = () => {
  const screenWidth = getScreenWidth();

  const display = screenWidth === 'SM' ? 'block' : 'flex';
  const margin = screenWidth === 'SM' ? '45px'  : '11px 0px';
  const width = screenWidth === 'SM' ? '70%' : '100%';

  const styles = {
    container: {
      display: 'flex',
      padding: '0px 10%',
    },
    headingContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      padding: '20px 0px',
    },
    headingText: {
      fontSize: fontSize.medium,
      color: colors.accentColor,
      fontWeight: fontWeight.mediumBold,
    },
    categoryContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin:margin,
      width : width,
    },
  }
  return (
    <SimplifiedDiv style={styles.container}>
      <Grid container direction="row" spacing={5} display={display}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div style={styles.headingContainer}>
            <h2 style={styles.headingText}>Category</h2>
          </div>
          <SimplifiedDiv style={styles.categoryContainer}>
            <CategoryTab />
          </SimplifiedDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <SimplifiedDiv style={styles.headingContainer}>
            <h2 style={styles.headingText}>Articles</h2>
          </SimplifiedDiv>
          <ArticlesHomePage />
          <SimplifiedDiv style={styles.headingContainer}>
            <h2 style={styles.headingText}>Suggested articles</h2>
          </SimplifiedDiv>
          <SuggestedCarousel />
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default ProductsHomePage;
