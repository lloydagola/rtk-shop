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
  <Grid item xs={12} lg={3} display="flex">
    <Card
      sx={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={product.image} alt="product" width="150px" min-height="150px" />
      <Typography variant="h5">{product.title}</Typography>
      <Typography>KES: {product.price}</Typography>
      <Typography flexGrow="1">{product.description}</Typography>
      {addToCart ? (
        <Button
          variant="contained"
          color="success"
          sx={{ margin: "8px" }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      ) : removeFromCart ? (
        <Button
          variant="contained"
          color="error"
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
