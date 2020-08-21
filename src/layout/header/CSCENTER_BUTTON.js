import React from "react";
import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(9),
    },
  },
}));
const CSCENTER_BUTTON = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" href="#contained-buttons">
        고객문의
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        계좌이체
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        배송안내
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        교환반품
      </Button>
    </div>
  );
};

export default CSCENTER_BUTTON;
