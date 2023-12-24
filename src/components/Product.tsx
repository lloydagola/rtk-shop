import React, { useEffect, useState } from "react";

const fetchProducts = async () => {
  const result = await fetch("https://fakestoreapi.com/products");
  const products = await result.json();

  return products;
};

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      const productsResponse = await fetchProducts();
      setProducts(productsResponse);
    })();
  }, []);

  console.log({ products });

  return <div>Product Dashboard</div>;
};

export default Product;
