import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Box, Grid, TableRow, TableCell, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SiteRow from "./SiteRow";
import SiteDetail from "./SiteDetail";

const AllSites = ({ sites }) => {
  const [currSite, setCurrSite] = useState({});
  console.log("🚀 ~ file: index.js ~ line 10 ~ AllSites ~ currSite", currSite);

  const theme = useTheme();
  const useStyles = makeStyles({
    cell: {
      border: "0px",
      color: theme.palette.text.secondary,
      fontWeight: 500,
      paddingBottom: "0px",
      textAlign: "left",
    },
    enabled: { width: 100 },
    headRow: {},
    id: { textAlign: "left", minWidth: 50 },
    name: {
      textAlign: "left",

      minWidth: 135,
    },
    root: {
      marginTop: ".5rem",
      width: "75vw",
      [theme.breakpoints.down("lg")]: {
        width: "90vw",
      },
    },
    sitesHeading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: ".5rem .5rem 0rem 0rem",
    },
    table: {},
    url: { textAlign: "left", minWidth: 180 },
  });
  const classes = useStyles();

  const handleClick = (event) => {
    // console.log(event.target.value);
    console.log("currentTarget:", event.currentTarget.value);
    const currSiteId = parseInt(event.currentTarget.value);
    const found = sites.find((site) => site.id === currSiteId);
    setCurrSite(found);
  };

  return (
    <Box
      className={classes.root}
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      spacing={2}
    >
      <div>
        <Typography className={classes.sitesHeading} variant="h2">
          Sites
        </Typography>

        <TableRow className={classes.headRow} elevation={0}>
          <TableCell className={`${classes.cell} ${classes.name}`}>
            Name
          </TableCell>
          <TableCell className={`${classes.cell} ${classes.id}`}>ID</TableCell>
          <TableCell className={`${classes.cell} ${classes.url}`}>
            URL
          </TableCell>
          <TableCell className={`${classes.cell} ${classes.enabled}`}>
            Enabled
          </TableCell>
          <TableCell className={`${classes.cell} `}></TableCell>
        </TableRow>
        {sites.map((site) => {
          return (
            <SiteRow
              currSite={currSite}
              key={site.id}
              handleClick={handleClick}
              site={site}
            />
          );
        })}
      </div>

      <Grid item xs={6}>
        {currSite.id ? (
          <SiteDetail site={currSite} />
        ) : (
          <SiteDetail site={{}} />
        )}
      </Grid>
    </Box>
  );
};

AllSites.propTypes = {
  sites: PropTypes.array,
};

export default AllSites;
