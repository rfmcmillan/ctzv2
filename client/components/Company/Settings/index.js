import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import RevenueShareSlider from "./RevenueShareSlider";

const Settings = (props) => {
  const {
    data: {
      settings: { general, revenue },
    },
  } = props;

  const [enabled, setEnabled] = useState(general.enabled);
  const [testPublisher, setTestPublisher] = useState(general.testPublisher);
  const [accountType, setAccountType] = useState(general.accountType);

  const theme = useTheme();

  const useStyles = makeStyles({
    accountType: { margin: ".4rem .5rem .5rem .5rem" },
    accountTypeLabel: { fontSize: ".75rem" },
    enabled: { margin: ".6rem 0rem 0rem 0rem" },
    revenueShareContain: { margin: ".5rem" },
    revenueShareLabel: {
      fontSize: ".75rem",
    },
    revenueShareSlider: { width: 250 },
    root: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      width: "75vw",

      [theme.breakpoints.down("lg")]: {
        width: "90vw",
      },
    },
    settingsHeading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: ".5rem .5rem .5rem 0rem",
    },
    testPublisher: { marginTop: ".6rem" },
    timezone: { margin: "0rem 0rem 1rem 0rem" },
    timezoneContain: { margin: "0rem .5rem .5rem 1rem" },
    timezoneLabel: { marginBottom: ".25rem", marginTop: ".5rem" },
  });
  const classes = useStyles();

  const handleEnabledToggle = (event) => {
    const { target } = event;
    setEnabled(target.checked);
  };

  const handleTestPublisherToggle = (event) => {
    const { target } = event;
    setTestPublisher(target.checked);
  };

  const handleAccountTypeChange = (event) => {
    const { target } = event;
    setAccountType(target.value);
  };

  return (
    <div>
      <Typography className={classes.settingsHeading} variant="h2">
        Settings
      </Typography>
      <Paper elevation={5} className={classes.root}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={1}>
            <Grid
              className={classes.timezoneContain}
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item className={classes.timezoneLabel}>
                <Typography color="textSecondary" variant="caption">
                  Timezone
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.timezone} variant="body1">
                  {general.timezone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3}
            container
            direction="row"
            justifyContent="space-around"
          >
            <Grid item>
              <FormControlLabel
                className={classes.enabled}
                control={
                  <Switch
                    checked={enabled}
                    inputProps={{ "aria-label": "Enabled Switch" }}
                    onChange={handleEnabledToggle}
                    name="enabled"
                  ></Switch>
                }
                label={enabled === true ? "Enabled" : "Disabled"}
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                className={classes.testPublisher}
                control={
                  <Switch
                    checked={testPublisher}
                    inputProps={{ "aria-label": "Test Publisher Switch" }}
                    onChange={handleTestPublisherToggle}
                    name="test-publisher"
                  ></Switch>
                }
                label={
                  testPublisher === true
                    ? "Test Publisher"
                    : "Not a Test Publisher"
                }
              />
            </Grid>
          </Grid>
          <Grid item container justifyContent="center" xs={4}>
            <Grid item>
              <FormControl className={classes.accountType} component="fieldset">
                <FormLabel
                  className={classes.accountTypeLabel}
                  component="legend"
                >
                  Account Type
                </FormLabel>
                <RadioGroup
                  aria-label="account-type"
                  name="account-type"
                  value={accountType}
                  onChange={handleAccountTypeChange}
                >
                  <Grid container>
                    <FormControlLabel
                      value="CTZero"
                      control={<Radio />}
                      label="CTZero"
                    />
                    <FormControlLabel
                      value="CTLite"
                      control={<Radio />}
                      label="CTLite"
                    />
                    <FormControlLabel
                      value="CTPlus"
                      control={<Radio />}
                      label="CTPlus"
                    />
                    <FormControlLabel
                      value="CTPro"
                      control={<Radio />}
                      label="CTPro"
                    />
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <RevenueShareSlider publisherShare={revenue.publisherShare} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

Settings.propTypes = {
  data: PropTypes.object,
};

export default Settings;
