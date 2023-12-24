import React from "react";
import Box from "@mui/material/Box";
import { Heading } from "./Text";

export const NotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      alignItems="center"
    >
      <Heading>Error 404 - NotFound</Heading>;
    </Box>
  );
};
export default NotFound;
