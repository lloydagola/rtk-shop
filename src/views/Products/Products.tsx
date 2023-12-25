import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import Product from "./components/Product";
import { IProduct } from "../../common/types/types";
import { BodyText } from "../../common/components/Text";
import { add } from "../../state/slices/cartSlice";
import { getProducts } from "../../state/slices/productsSlice";
import { AppDispatch, RootState } from "../../state/store/store";
import StatusCodes from "../../common/utils/StatusCodes";

const Products = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    products: { data: products = [], status = StatusCodes.IDLE },
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

  if (status === StatusCodes.LOADING) {
    return <BodyText>Loading...</BodyText>;
  }

  if (status === StatusCodes.ERROR) {
    return <BodyText>Oops something went wrong. Try again later...</BodyText>;
  }

  return (
    <Grid container spacing={2}>
      {products.map((product: IProduct) => (
        <Product product={product} addToCart={addToCart} />
      ))}
    </Grid>
  );
};

export default Products;
