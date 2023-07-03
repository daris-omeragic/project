import React, { useState, useEffect, useContext } from 'react'
import { fetchAllProducts } from '../../api/productsApi';
import { Grid } from '@mui/material';

import ArticleCard from '../ArticleCard/ArticleCard';
import { CartContext } from '../../context/CartContext';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';


const ShopProducts = () => {

    const [articles, setArticles] = useState([]);

    const { setItems } = useContext(CartContext);
  
    useEffect(() => {
      fetchProductData();
    }, []);
  
    async function fetchProductData() {
      try {
        const data = await fetchAllProducts();
        const filteredProducts = data.products.map(product => {
          return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.thumbnail
          };
        });
        setArticles(filteredProducts);
      } catch (error) {
        console.log('Error fetching product data:', error);
      }
    }
    
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
      <SimplifiedDiv>
        <Grid container justify="center" spacing={3}>
          {articles.map((article) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={article.id}>
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
  }
export default ShopProducts;