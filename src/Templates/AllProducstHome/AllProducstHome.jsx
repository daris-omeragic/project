import React from 'react'
import { colors } from '../../util/theme';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import { Grid } from '@mui/material';
import CategoryTab from '../CategoryTab/CategoryTab';
import ShopProducts from '../ShopProducts/ShopProducts';


const AllProducstHome = () => {

    const styles = {
        container: {
            display: "flex",
            padding: "0px 10%",
        },
        headingContainer: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: "20px 0px",
        },
        headingText: {
            fontSize: "1.5rem",
            color: colors.accentColor,
            fontWeight: "bold",
        },
        categoryContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    };

    return (
        <SimplifiedDiv style={styles.container}>
            <Grid container direction="row" spacing={5} display='flex' justifyContent='center'>
                <Grid item xs={8} sm={8} md={3} lg={3}>
                    <SimplifiedDiv style={styles.headingContainer}>
                        <h5 style={styles.headingText}>Category</h5>
                    </SimplifiedDiv>
                    <SimplifiedDiv style={styles.categoryContainer}>
                        <CategoryTab />
                    </SimplifiedDiv>
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <SimplifiedDiv style={styles.headingContainer}>
                        <h5 style={styles.headingText}>Articles</h5>
                    </SimplifiedDiv>
                    <ShopProducts />
                    <SimplifiedDiv style={styles.headingContainer}></SimplifiedDiv>
                </Grid>
            </Grid>
        </SimplifiedDiv>
    );
};


export default AllProducstHome;