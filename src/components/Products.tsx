import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";

import products from "../mocks/data/products";
import { IProduct } from "../common/types/types";
import { useDispatch } from "react-redux";
import { add } from "../state/slices/cartSlice";

const fetchProducts = async () => {
  //const result = await fetch("https://fakestoreapi.com/productss");
  //const products = await result.json();

  return products;
};

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async function () {
      const productsResponse = await fetchProducts();
      setProducts(productsResponse);
    })();
  }, []);

  const dispatch = useDispatch();
  const addToCart = (product: IProduct) => {
    dispatch(add(product));
  };

  const cards = products.map((product: IProduct) => (
    <Grid item xs={12} lg={3}>
      <Card sx={{ padding: "16px" }}>
        <img src={product.image} alt="product" width="150px" />
        <Typography variant="h5">{product.title}</Typography>
        <Typography>KES: {product.price}</Typography>
        <Typography>{product.description}</Typography>
        <Button
          variant="contained"
          sx={{ margin: "8px" }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {cards}
    </Grid>
  );
};

export default Products;