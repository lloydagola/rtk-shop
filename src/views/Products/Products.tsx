import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

import Product from "./components/Product";
import products from "../../common/mocks/data/products";
import { IProduct } from "../../common/types/types";
import { add } from "../../state/slices/cartSlice";

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
