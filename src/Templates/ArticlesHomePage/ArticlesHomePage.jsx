import React, { useContext} from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";
import { CartContext } from "../../context/CartContext";
import { generateId } from "../../util/theme";

const loremText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const articles = [
  {
    id: generateId(5),
    title: "Article 1",
    description: loremText,
    image: article1,
    price: 13,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 2",
    description: loremText,
    image: article2,
    price: 21,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 3",
    description: loremText,
    image: article3,
    price: 43,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 4",
    description: loremText,
    image: article2,
    price: 62,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 5",
    description: loremText,
    image: article1,
    price: 54,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 3",
    description: loremText,
    image: article3,
    price: 43,
    qty: 1,
  },
];

const ArticlesHomePage = () => {
  const { setItems } = useContext(CartContext);

  const addArticleHandler = (article) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === article.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === article.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevItems, { ...article, qty: 1 }];
      }
    });
  };

  return (
    <SimplifiedDiv style={{ padding: '10px' }}>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={12} md={4} key={article.id}>
            <ArticleCard
              title={article.title}
              description={article.description}
              image={article.image}
              price={article.price}
              article={article}
              onClickButton={() => addArticleHandler(article)}
            />
          </Grid>
        ))}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;