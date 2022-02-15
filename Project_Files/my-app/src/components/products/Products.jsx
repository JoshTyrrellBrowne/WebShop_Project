import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './product/Product';
import useStyles from './styles';

/// below is the old & initial way we store product data, now we do it in commerce.js
//const products = [
//    {id: 1, name: 'Shoes', description: 'Runnning Shoes', price: '$5', image: 'https://img.search.brave.com/8TAtxFDmoa8nETGBhtAlg7hgblgYqptcqkmt31Ul3Tg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/X2VPaW50VkRQcHhz/VFFRVHdGOEN3SGFI/YSZwaWQ9QXBp'},
//    {id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'https://img.search.brave.com/PhVftz0MkpMDbfoJwMO5MKGe4-6z3VaCNNU8O6dVGrc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5lbFUtM2pB/T09XZV9hbDlaa0FS/c2xnSGFFSyZwaWQ9/QXBp'}
//];

const Products = ({ products }) => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            { products.map((product) => (
                // xs is mobile screen, sm is small screen, medium large
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;