import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

export const Heading = ({
  children,
  variant = "h1",
}: {
  children: string;
  variant?: Variant;
}) => {
  return <Typography variant={variant}>{children}</Typography>;
};
export const BodyText = ({
  children,
  variant = "body1",
}: {
  children: string;
  variant?: Variant;
}) => {
  return <Typography variant={variant}>{children}</Typography>;
};
