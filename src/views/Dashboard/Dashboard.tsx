import React from "react";
import { Heading } from "../../common/components/Text";
import Products from "../Products/Products";

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
