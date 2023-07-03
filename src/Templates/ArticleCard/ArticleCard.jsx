import React from 'react';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import { colors } from '../../util/theme';
import { Card, Typography, Button } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";



const ArticleCard = ({ title, description, image, price, onClickButton }) => {
  const styles = {
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    imageContainer: {
      width: "100%",
      height: "auto",
      marginBottom: "8px",
    },
    image: {
      objectFit: "contain",
      width: "100%",
      maxHeight: "150px",
    },
    descriptionContainer: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginBottom: "8px",
      textAlign: "center",
    },
    buttonHolder: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    shoppingCartIcon: {
      fontSize: "20px",
      marginRight: "4px",
      color: colors.white,
    },
  };

  return (
    <Card style={styles.card}>
      <SimplifiedDiv style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </SimplifiedDiv>
      <SimplifiedDiv style={styles.descriptionContainer}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description.length > 70 ? `${description.slice(0, 70)}...` : description}
        </Typography>
        <Typography variant="h6" color={colors.accentColor}>
          {price}$
        </Typography>
      </SimplifiedDiv>
      <SimplifiedDiv style={styles.buttonHolder}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartOutlined style={styles.shoppingCartIcon} />}
          onClick={onClickButton}
          style={{
            borderRadius: "3px", background: colors.accentColor, padding: "6px",
            fontSize: "12px", marginBottom: '25px'
          }}
        >
          Add to Cart
        </Button>
      </SimplifiedDiv>
    </Card>
  );
};

export default ArticleCard;