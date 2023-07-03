import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Carousel } from "react-responsive-carousel";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { articles } from "../ArticlesHomePage/ArticlesHomePage";
import { Grid } from "@mui/material";
import { getScreenWidth } from "../../util/helpers";

const styles = {
  articleCardHolder: {
    padding: 20,
  },
};

const SuggestedCarousel = () => {
  const screenWidth = getScreenWidth();
  const centerSlidePercentage = screenWidth === 'SM' ? 100 : 33;
  return (
    <SimplifiedDiv>
      <Grid container='row'>
        <Grid item xs={12}>
          <Carousel
            showIndicators={false}
            showStatus={false}
            infiniteLoop
            interval={1000}
            swipeable
            autoPlay
            showThumbs={false}
            centerMode
            centerSlidePercentage={centerSlidePercentage}
          >
            {articles.map((article, index) => (
              <SimplifiedDiv key={index} style={styles.articleCardHolder}>
                <ArticleCard
                  title={article.title}
                  image={article.image}
                  description={article.description}
                  price={article.price}
                />
              </SimplifiedDiv>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};
export default SuggestedCarousel;