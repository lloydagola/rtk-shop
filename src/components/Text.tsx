import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

export const Heading = ({
  children,
  variant,
}: {
  children: string;
  variant: Variant;
}) => {
  return <Typography variant={variant}>{children}</Typography>;
};
