import React from "react";
import { Heading } from "../components/Text";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
