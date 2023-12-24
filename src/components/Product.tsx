import { Typography, private_createTypography } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";

const fetchProducts = async () => {
  const result = await fetch("https://fakestoreapi.com/products");
  const products = await result.json();

  return products;
};

interface IProduct {
  category: string;
  description: string;
  image: string;
  id: number;
  price: number;
  rating: any;
  title: string;
}

const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async function () {
      const productsResponse = await fetchProducts();
      setProducts(productsResponse);
    })();
  }, []);

  const cards = products.map((product: IProduct) => (
    <Grid item xs={12} lg={3}>
      <Card>
        <img src={product.image} alt="product" width="150px" />
        <Typography>card body</Typography>
      </Card>
    </Grid>
  ));

  return <Grid container>{cards};</Grid>;
};

export default Product;
