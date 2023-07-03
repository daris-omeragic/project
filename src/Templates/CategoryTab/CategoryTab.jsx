import React, { useState } from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { getScreenWidth } from "../../util/helpers";

const categories = [
  {
    name: "Sportswear",
    active: false,
  },
  {
    name: "Mens",
    active: false,
  },
  {
    name: "Womens",
    active: false,
  },
  {
    name: "Kids",
    active: false,
  },
  {
    name: "Fashion",
    active: false,
  },
  {
    name: "Households",
    active: false,
  },
  {
    name: "Interiors",
    active: false,
  },
  {
    name: "Clothing",
    active: false,
  },
  {
    name: "Bags",
    active: false,
  },
  {
    name: "Shoes",
    active: false,
  },
];

const subCategory = [
  {
    categoryName: "Sportswear",
    name: "Adidas",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "Nike",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "Puma",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Adidas",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Nike",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Puma",
    active: false,
  },
];

const CategoryTab = () => {
  const screenWidth = getScreenWidth();

  const width = screenWidth === "SM" ? "100%" : "70%";
  const [isOpenCategory, setIsOpenCategory] = useState(categories);

  const styles = {
    container: {
      border: `0.5px solid ${colors.lightGray}`,
      borderRadius: "2px",
      textAlign: "left",
      padding: "15px 20px",
      cursor: 'pointer',
      width: width,
    },
    category: {
      padding: "5px 0px",
    },
    categoryContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    addIconStyle: {
      fontSize: fontSize.medium,
      color: colors.accentColor,
    },
    subCategoryContainer: {
      padding: "0px 10px",
    },
    subCategoryText: {
      fontSize: fontSize.smallPlus,
      color: colors.gray,
      padding: "2px 0px",
    },
  };

  console.log(isOpenCategory);

  return (
    <SimplifiedDiv style={styles.container}>
      <Grid container direction='column'>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {categories.map((cat, index) => {
            const filteredSubcategories = subCategory.filter(
              (sub) => sub.categoryName === cat.name
            );

            return (
              <>
                <SimplifiedDiv style={styles.categoryContainer}>
                  <Text style={styles.category}>{cat.name}</Text>
                  {filteredSubcategories.length > 0 && (
                    <AddIcon
                      style={styles.addIconStyle}
                      onClick={() => {
                        const updatedCategories = isOpenCategory.map((category, i) =>
                          i === index ? { ...category, active: !category.active } : category
                        );
                        setIsOpenCategory(updatedCategories);
                      }}
                    />
                  )}
                </SimplifiedDiv>
                {filteredSubcategories.length > 0 &&
                  isOpenCategory[index].active && (
                    <SimplifiedDiv style={styles.subCategoryContainer}>
                      {filteredSubcategories.map((sub) => (
                        <Text style={styles.subCategoryText}>{sub.name}</Text>
                      ))}
                    </SimplifiedDiv>
                  )}
              </>
            );
          })}
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};


export default CategoryTab;