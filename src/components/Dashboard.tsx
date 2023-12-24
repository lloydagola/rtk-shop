import React from "react";
import { Heading } from "./Text";
import Product from "./Product";

const Dashboard = () => {
  return (
    <>
      <section>
        <Heading variant="h4">Dashboard</Heading>;
      </section>
      <section>
        <Product />
      </section>
    </>
  );
};

export default Dashboard;
