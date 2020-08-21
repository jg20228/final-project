import React from "react";
import { Grid, TextField } from "@material-ui/core";
import styles from "../../css/Payment.css";

const Payment = () => {
  return (
    <div className="grayBack">
      <Grid container>
        <div className="p_center">결제하기</div>
        <Grid item xs={12}>
          <div className="padding_size90"></div>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid className="whiteBack" item xs={5}>
              <Grid container>
                <Grid item xs={6}>
                  <TextField id="standard-basic" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid className="whiteBack" item xs={5}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default Payment;
