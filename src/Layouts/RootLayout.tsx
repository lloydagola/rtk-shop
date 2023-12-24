import React from "react";
import { Heading } from "../components/Text";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Heading variant="h2">RootLayout</Heading>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
