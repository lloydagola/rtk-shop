import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { RootState } from "../../state/store/store";

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
  const cartLength = useSelector((state: RootState) => state.cart).length;
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
              <Link to="/">Dashboard</Link>
            </li>
          </Grid>
          <Grid item flex="1" />
          <Grid item lg={1}>
            <li>
              <Link to="/cart">My Bag {cartLength}</Link>
            </li>
          </Grid>
        </Grid>
      </StyledUl>
    </StyledNav>
  );
};

export default NavBar;
