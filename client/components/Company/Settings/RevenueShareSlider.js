import React from "react";
import { PropTypes } from "prop-types";
import { Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return `${value * 100}%`;
}

const RevenueShareSlider = (props) => {
  const { publisherShare } = props;

  const useStyles = makeStyles({
    revenueShareContain: { margin: "1.1rem .5rem .5rem .5rem" },
    revenueShareLabel: {
      fontSize: ".75rem",
    },
    revenueShareSlider: { marginLeft: ".25rem", width: 250 },
  });
  const classes = useStyles();

  const marks = [
    {
      value: 0.1,
      label: "10%",
    },
    {
      value: 0.2,
    },
    {
      value: 0.3,
    },
    {
      value: 0.4,
    },
    {
      value: 0.5,
    },
    {
      value: 0.6,
    },
    {
      value: 0.7,
    },
    {
      value: 0.8,
    },
    {
      value: 0.9,
      label: "90%",
    },
  ];

  return (
    <div className={classes.revenueShareContain}>
      <Typography
        id="revenue-share-slider"
        className={classes.revenueShareLabel}
        color="textSecondary"
        gutterBottom
      >
        Revenue Share
      </Typography>
      <Slider
        className={classes.revenueShareSlider}
        defaultValue={publisherShare}
        getAriaValueText={valuetext}
        aria-labelledby="revenue-share-slider"
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        step={0.1}
        marks={marks}
        min={0.1}
        max={0.9}
      />
    </div>
  );
};

RevenueShareSlider.propTypes = {
  publisherShare: PropTypes.number,
};

export default RevenueShareSlider;
