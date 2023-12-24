import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import Product from "../Products/components/Product";
import { Heading } from "../../common/components/Text";
import { RootState } from "../../state/store/store";
import { remove } from "../../state/slices/cartSlice";

const Cart = () => {
  const cartList = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id: number) => {
    console.log("removing...");
    dispatch(remove(id));
  };
  return (
    <>
      <section>
        <Heading variant="h4">Cart</Heading>;
      </section>
      <section>
        <Grid container spacing={3}>
          {cartList.map((product) => (
            <Product product={product} removeFromCart={removeFromCart} />
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Cart;
