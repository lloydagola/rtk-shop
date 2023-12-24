import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React from "react";
import { IProduct } from "../../../common/types/types";
import Grid from "@mui/material/Grid";

interface IProductProps {
  addToCart: (product: IProduct) => void;
  product: IProduct;
}

const Product = ({ product, addToCart }: IProductProps) => {
  return (
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
  );
};

export default Product;
