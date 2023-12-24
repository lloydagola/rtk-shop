import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useCallback, useEffect, useState } from "react";

import products from "../../mocks/data/products";
import { IProduct } from "../../common/types/types";
import { useDispatch } from "react-redux";
import { add } from "../../state/slices/cartSlice";
import Product from "./components/Product";

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
  const addToCart = useCallback(
    (product: IProduct) => {
      dispatch(add(product));
    },
    [dispatch]
  );

  return (
    <Grid container spacing={2}>
      {products.map((product: IProduct) => (
        <Product product={product} addToCart={addToCart} />
      ))}
    </Grid>
  );
};

export default Products;
