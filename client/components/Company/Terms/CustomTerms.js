import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const CustomTerms = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const theme = useTheme();
  const useStyles = makeStyles({
    choose: { fontSize: "1rem" },
    chooseBtn: { marginTop: "1rem" },
    contain: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      padding: "1rem",
      width: "25vw",
    },
    fileDetails: { padding: "0rem 3rem 1rem 3rem" },
    h1: { fontSize: "1.5rem", fontWeight: 400 },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 400,
      margin: "1.5rem 0rem .25rem 0rem",
    },
    heading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: ".5rem .5rem .5rem 0rem",
    },
    instructions: {
      fontSize: "1rem",
      marginTop: "1rem",
      padding: "0rem 3rem 0rem 3rem",
    },
    uploadBtn: { marginTop: "1rem" },
  });
  const classes = useStyles();

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("myFile", selectedFile, selectedFile.name);
    console.log(selectedFile);
    setSelectedFile(null);
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div className={classes.fileDetails}>
          <Typography variant="h2" className={classes.h2}>
            File Details:
          </Typography>

          <Typography variant="body1">
            File Name: {selectedFile.name}
          </Typography>
          <Typography variant="body1">
            File Type: {selectedFile.type}
          </Typography>
          <Typography variant="body1">
            Last Modified: {selectedFile.lastModifiedDate.toDateString()}
          </Typography>
        </div>
      );
    }
  };

  return (
    <Paper elevation={5} className={classes.contain}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography className={classes.heading} variant="h2">
            Custom Terms of Service
          </Typography>
        </Grid>
        <Grid item>
          {!selectedFile ? (
            <Typography
              align="center"
              className={classes.instructions}
              variant="h4"
            >
              If you would like to upload your own custom terms of service,
              please choose a file below.
            </Typography>
          ) : (
            ""
          )}
        </Grid>
        <Grid item>
          {!selectedFile ? (
            <Button
              variant="outlined"
              component="label"
              className={classes.chooseBtn}
            >
              Choose File
              <input type="file" hidden onChange={onFileChange} />
            </Button>
          ) : (
            ""
          )}
        </Grid>
        <Grid item>{fileData()}</Grid>
        {selectedFile ? (
          <Button
            variant="outlined"
            onClick={onFileUpload}
            className={classes.uploadBtn}
            color="primary"
          >
            Upload
          </Button>
        ) : (
          ""
        )}
      </Grid>
    </Paper>
  );
};

CustomTerms.propTypes = {
  data: PropTypes.object,
};

export default CustomTerms;
