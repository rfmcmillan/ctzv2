import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import data from "../../../data.json";
import Settings from "./Settings";
import AllSites from "./AllSites";
import { Grid, Typography } from "@material-ui/core";

const Company = () => {
  const { sites } = data;
  const theme = useTheme();

  const useStyles = makeStyles({
    name: {
      color: theme.palette.text.primary,
      fontSize: "2rem",
      fontWeight: "700",
      margin: "1rem .5rem 0rem .5rem",
    },
    root: { backgroundColor: theme.palette.info.contrastText },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.contain}
      >
        <Grid item>
          <Typography className={classes.name} variant="h2">
            {data.name}
          </Typography>
        </Grid>
        <Grid item>
          <Settings data={data} />
        </Grid>
        <Grid item>
          <AllSites sites={sites} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Company;
