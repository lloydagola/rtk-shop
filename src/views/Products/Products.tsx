import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import Product from "./components/Product";
import { IProduct } from "../../common/types/types";
import { add } from "../../state/slices/cartSlice";
import { getProducts } from "../../state/slices/productsSlice";
import { AppDispatch, RootState } from "../../state/store/store";

const Products = () => {
  //const [products, setProducts] = useState<IProduct[]>([]);

  const dispatch: AppDispatch = useDispatch();
  const {
    products: { data: products },
  } = useSelector((state: RootState) => state);

  const addToCart = useCallback(
    (product: IProduct) => {
      dispatch(add(product));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <Grid container spacing={2}>
      {products.map((product: IProduct) => (
        <Product product={product} addToCart={addToCart} />
      ))}
    </Grid>
  );
};

export default Products;
