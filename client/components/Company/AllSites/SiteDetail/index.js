import React from "react";
import { PropTypes } from "prop-types";
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Grid,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ScriptDelaySlider from "./ScriptDelaySlider";
import DoneIcon from "@material-ui/icons/Done";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Icon from "@material-ui/core/Icon";
import ProductIcon from "./ProductIcon";

function capitalizeDeviceType(deviceType) {
  const firstLetter = deviceType.slice(0, 1);
  const capitalized = firstLetter.toUpperCase();
  return capitalized + deviceType.slice(1);
}

const SiteDetail = (props) => {
  const { site } = props;
  const { activeProducts } = site;
  const theme = useTheme();

  const useStyles = makeStyles({
    contain: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",

      padding: ".75rem",
    },
    delaySlider: { margin: ".5rem" },
    enabled: { margin: ".5rem" },
    icon: { marginRight: ".5rem" },
    id: { margin: ".5rem" },
    list: {
      margin: "1rem",
      minHeight: 190,
    },
    name: { margin: ".5rem" },
    root: { margin: "0rem 0rem 1rem 1rem" },
    placeHolder: { minHeight: 489 },
    placeHolderText: {
      color: theme.palette.text.secondary,
      fontWeight: 800,
      marginTop: 225,
    },
    products: { fontWeight: "500", marginTop: "2rem" },
    scriptDelay: { width: 250 },
    sitesHeading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: ".5rem .5rem .5rem 0rem",
    },
    url: { margin: ".5rem" },
  });
  const classes = useStyles();

  const devices = {};

  if (activeProducts) {
    for (let i = 0; i < activeProducts.length; i++) {
      const currProduct = activeProducts[i];
      for (let j = 0; j < currProduct.devices.length; j++) {
        const currDevice = currProduct.devices[j];

        if (!devices[currDevice.type]) {
          devices[currDevice.type] = { products: [] };
        }
        devices[currDevice.type].products.push({
          type: currProduct.type,
          enabled: currDevice.enabled,
        });
      }
    }
  }

  const devicesArray = Object.entries(devices);

  if (site.id) {
    return (
      <div className={classes.root}>
        <Typography className={classes.sitesHeading} variant="h2">
          Site Details
        </Typography>
        <Paper elevation={5} className={classes.contain}>
          <Grid container direction="column" alignItems="center">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell> URL</TableCell>
                  <TableCell> Enabled</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    {" "}
                    {site.name ? site.name : site.displayName}
                  </TableCell>
                  <TableCell> {site.id}</TableCell>
                  <TableCell> {site.domain}</TableCell>
                  <TableCell>
                    {" "}
                    {site.enabled ? (
                      <Chip
                        icon={<DoneIcon />}
                        size="small"
                        label="Enabled"
                        color="secondary"
                      />
                    ) : (
                      <Chip size="small" label="Disabled" />
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Grid item>
              <Typography className={classes.products} align="center">
                Active Products
              </Typography>
              <Grid container justifyContent="space-around">
                {devicesArray.map((device) => {
                  return (
                    <Grid key={device[0]} item xs={4}>
                      <List
                        className={classes.list}
                        dense={true}
                        key={device[0]}
                        subheader={
                          <ListSubheader>
                            <ProductIcon device={device[0]} />

                            {capitalizeDeviceType(device[0])}
                          </ListSubheader>
                        }
                      >
                        {device[1].products.map((product) => {
                          return (
                            <ListItem key={product.type}>
                              {product.enabled ? (
                                <Icon
                                  className={classes.icon}
                                  title="Enabled"
                                  color="secondary"
                                >
                                  <DoneIcon />
                                </Icon>
                              ) : (
                                <Icon className={classes.icon} title="Disabled">
                                  <CloseRoundedIcon />
                                </Icon>
                              )}
                              <Box>
                                <ListItemText primary={product.type} />
                              </Box>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item>
              <ScriptDelaySlider
                className={classes.delaySlider}
                scriptDelay={site.scriptDelay}
                id={site.id}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Typography className={classes.sitesHeading} variant="h2">
          Site Details
        </Typography>
        <Paper
          elevation={5}
          className={`${classes.contain} ${classes.placeHolder}`}
        >
          <Typography
            align="center"
            className={classes.placeHolderText}
            color="textSecondary"
          >
            Please select a site from the left to see additional details and
            settings
          </Typography>
        </Paper>
      </div>
    );
  }
};

SiteDetail.propTypes = {
  site: PropTypes.object,
};

export default SiteDetail;
