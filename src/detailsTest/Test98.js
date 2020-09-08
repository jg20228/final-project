import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Button, Select, MenuItem } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Test98() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const fake = () => {
    alert("완료");
  };

  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            id="outlined-full-width"
            label="제목"
            placeholder="title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>

        <div>
          <TextField
            id="outlined-full-width"
            label="내용"
            multiline
            fullWidth
            rows={8}
            variant="outlined"
          />
        </div>
      </Grid>
      <br /> <br />
      <Grid item xs={1}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}></Grid>
      <Grid item xs={4}>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem>
            <em>
              <StarIcon />
            </em>
          </MenuItem>
          <MenuItem>
            <StarIcon />
            <StarIcon />
          </MenuItem>
          <MenuItem>
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </MenuItem>
          <MenuItem>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </MenuItem>
          <MenuItem>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          onClick={fake()}
        >
          등록
        </Button>
      </Grid>
    </Grid>
  );
}

export default Test98;
