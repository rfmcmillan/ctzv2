import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NavButton from "./NavButton";

const Nav = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    button: {
      color: "white",
      fontSize: "medium",
    },
    logoText: {
      fontFamily: "Fredoka One",
      fontSize: 25,
      fontWeight: 900,
      margin: "2px 0px 0px 10px",
    },
    root: { backgroundColor: theme.palette.text.primary, boxShadow: "none" },
    terms: { margin: ".4rem 0rem 0rem 0rem" },
    toolBar: { padding: 10 },
    websites: { margin: ".4rem 0rem 0rem 1rem" },
  });
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolBar}>
        <img
          width="70px"
          src="./assets/clicktripz-logo.svg"
          alt="Clicktripz Logo"
        />
        <NavButton
          id="logo"
          component={Link}
          to="/sites"
          className={classes.logoText}
        >
          Clicktripz
        </NavButton>
        <NavButton
          className={`${classes.button} ${classes.websites}`}
          id="sites"
          component={Link}
          to="/sites"
        >
          Sites
        </NavButton>
        <NavButton
          className={`${classes.button} ${classes.terms}`}
          id="terms"
          component={Link}
          to="/terms"
        >
          Terms of Service
        </NavButton>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
