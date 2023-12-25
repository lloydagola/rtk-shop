import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import Product from "../Products/components/Product";
import { Heading } from "../../common/components/Text";
import { RootState } from "../../state/store/store";
import { remove } from "../../state/slices/cartSlice";
import Box from "@mui/material/Box";

const EmptyCart = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      display="flex"
    >
      <Heading variant="h3">The cart is empty</Heading>;
    </Box>
  );
};

const Cart = () => {
  const cartList = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <>
      <section>
        <Heading variant="h4">Cart</Heading>;
      </section>
      <section>
        <Grid container spacing={3}>
          {cartList.length > 0 ? (
            cartList.map((product) => (
              <Product product={product} removeFromCart={removeFromCart} />
            ))
          ) : (
            <EmptyCart />
          )}
        </Grid>
      </section>
    </>
  );
};

export default Cart;
