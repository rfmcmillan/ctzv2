import React from "react";
import data from "../../../../data.json";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CustomTerms from "./CustomTerms";
import DefaultTerms from "./DefaultTerms";
import Settings from "../Settings";

const Terms = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    name: {
      color: theme.palette.text.primary,
      fontSize: "2rem",
      fontWeight: "700",
      margin: "1rem .5rem 0rem .5rem",
    },
    terms: { marginTop: "2rem", width: "75vw" },
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
        <Grid
          className={classes.terms}
          item
          container
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6}>
            <DefaultTerms />
          </Grid>
          <Grid item container xs={5} justifyContent="flex-end">
            <Grid item>
              <CustomTerms />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Terms.propTypes = {};

export default Terms;
