import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IProduct } from "../../../common/types/types";
import Box from "@mui/material/Box";

interface IProductProps {
  product: IProduct;
  addToCart?: (product: IProduct) => void;
  removeFromCart?: (productId: number) => void;
}

const Product = ({ product, addToCart, removeFromCart }: IProductProps) => (
  <Grid item xs={12} lg={3}>
    <Card sx={{ padding: "16px" }}>
      <img src={product.image} alt="product" width="150px" />
      <Typography variant="h5">{product.title}</Typography>
      <Typography>KES: {product.price}</Typography>
      <Typography>{product.description}</Typography>
      {addToCart ? (
        <Button
          variant="contained"
          sx={{ margin: "8px" }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      ) : removeFromCart ? (
        <Button
          variant="contained"
          sx={{ margin: "8px" }}
          onClick={() => removeFromCart(product.id)}
        >
          Remove from Cart
        </Button>
      ) : null}
    </Card>
  </Grid>
);

export default Product;
