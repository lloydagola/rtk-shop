import React from "react";
import { Heading } from "./Text";
import Products from "./Products";

const Dashboard = () => {
  return (
    <>
      <section>
        <Heading variant="h4">Dashboard</Heading>;
      </section>
      <section>
        <Products />
      </section>
    </>
  );
};

export default Dashboard;
