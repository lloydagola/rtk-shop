import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

const StyledNav = styled("nav")({});
const StyledUl = styled("ul")({
  display: "flex",
  flexDirection: "row",
  listStyleType: "none",
  padding: "8px",
  backgroundColor: "#eee",

  li: {
    margin: "8px",
    a: {
      textDecoration: "none",
    },
  },
});

const NavBar = () => {
  return (
    <StyledNav>
      <StyledUl>
        <Grid container>
          <Grid item lg={1}>
            <li>
              <Link to="/">RTK-Shop</Link>
            </li>
          </Grid>
          <Grid item lg={1}>
            <li>
              <Link to="/">Products</Link>
            </li>
          </Grid>
          <Grid item lg={1}>
            <li>
              <a href="/">Dashboard</a>
            </li>
          </Grid>
          <Grid item flex="1" />
          <Grid item lg={1}>
            <li>
              <a href="/cart">My Bag {0}</a>
            </li>
          </Grid>
        </Grid>
      </StyledUl>
    </StyledNav>
  );
};

export default NavBar;
