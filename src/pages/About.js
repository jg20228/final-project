import React from "react";
import aboutA from "../images/img2/banner.jpg";
import aboutB from "../images/img2/ban2.jpg";
import aboutC from "../images/img2/icon1.jpg";
import aboutD from "../images/img2/icon2.jpg";
import aboutE from "../images/img2/icon3.jpg";
import {
  Grid,
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem,
  Select,
  makeStyles,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import styles from "../css/About.css";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 600,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  ta: {
    fontSize: "18px",
    margin: theme.spacing(1),
    minWidth: 600,
    maxWidth: 600,
    minHeight: 100,
    maxHeight: 100,
  },
}));

const sendMSG = async () => {
  alert("전송완료");
  Axios.post("http://localhost:8080/about", {
    title: "테스트",
    content: "test1",
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const About = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid container>
      <Grid item xs={"auto"}>
        <img className="banner" src={aboutA} alt="" />
      </Grid>

      <Grid item xs={12}>
        <div className="padding_size90"></div>
      </Grid>

      <Grid item xs={3}>
        <div></div>
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={12}>
            <img className="grid_imgs" src={aboutB} alt="" />
          </Grid>

          <Grid item xs={12}>
            <p className="about_font">
              패밀리 홈케어 브랜드 아르아르는 자연으로부터 얻은 신선하고 건간항
              재료를 사용하여
            </p>
          </Grid>

          <Grid item xs={12}>
            <p className="about_font">
              자연과 모두에게 이로운 제품을 만들기 위해 끊임없이 노력하고
              있습니다.
            </p>
          </Grid>

          <Grid item xs={12}>
            <div className="padding_size90"></div>
          </Grid>

          <Grid item xs={12}>
            <div className="padding_size90"></div>
          </Grid>

          <Grid item xs={3}>
            <img className="grid_imgs" src={aboutC} alt="" />
          </Grid>
          <Grid item xs={1}>
            <div></div>
          </Grid>
          <Grid item xs={8}>
            <div className="padding_size90"></div>
            <p className="about_icon_font_title_left">FULL OF GOODNESS</p>
            <p className="about_icon_font_left">
              사랑하는 마음을 가득 담아 신선한 과일과 채소, 최상의 에센셜
              <br />
              오일, 그리고 안전한 원료를 사용하여 건강한 제품을 만듭니다.
            </p>
            <div className="padding_size90"></div>
          </Grid>

          <Grid item xs={12}>
            <div className="padding_size90"></div>
          </Grid>

          <Grid item xs={8}>
            <div className="padding_size90"></div>
            <p className="about_icon_font_title_right">FULL OF UNIQUENESS</p>
            <p className="about_icon_font_right">
              개성을 잃지 않으면서도, 최소한의 포장과 재활용이 가능한 소재를
              사용하여
              <br />
              환경에 미치는 영향을 최소화하고자 노력합니다.
            </p>
            <div className="padding_size90"></div>
          </Grid>

          <Grid item xs={1}>
            <div></div>
          </Grid>

          <Grid item xs={3}>
            <img className="grid_imgs" src={aboutD} alt="" />
          </Grid>

          <Grid item xs={3}>
            <img className="grid_imgs" src={aboutE} alt="" />
          </Grid>
          <Grid item xs={1}>
            <div></div>
          </Grid>
          <Grid item xs={8}>
            <div className="padding_size90"></div>
            <p className="about_icon_font_title_left">FULL OF HAPPINESS</p>
            <p className="about_icon_font_left">
              행복한 삶의 터전을 지키기 위해 우리 제품이 가진 올바른 가치와
              <br />
              정보를 공유하여 함께 해결할 방법을 찾습니다.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <div></div>
      </Grid>
      <Grid item xs={12}>
        <div className="padding_size90"></div>
      </Grid>
      <Grid container>
        <Grid itme xs={12}>
          <div className="bot_background">
            <div className="padding_size90"></div>
            <p className="about_contact">Contact us</p>
            <p className="about_contact">It helps to improve our business.</p>

            <Grid container>
              <Grid itme xs={4}>
                <div></div>
              </Grid>

              <Grid itme xs={4}>
                <Grid container>
                  <Grid itme xs={12}>
                    <FormControl required className={classes.formControl}>
                      <InputLabel id="demo-simple-select-required-label">
                        Subject
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={age}
                        onChange={handleChange}
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="">
                          <em>(선택)</em>
                        </MenuItem>
                        <MenuItem value={"Feedback"}>Feedback</MenuItem>
                        <MenuItem value={"Business Inquiry"}>
                          Business Inquiry
                        </MenuItem>
                        <MenuItem value={"Recruitment Inquiry"}>
                          Recruitment Inquiry
                        </MenuItem>
                      </Select>
                      <FormHelperText>Required</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid itme xs={12}>
                    <TextareaAutosize
                      className={classes.ta}
                      rowsMax={4}
                      aria-label="maximum height"
                      defaultValue=""
                    />
                  </Grid>
                  <Grid itme xs={12}>
                    <div className="send_btn">
                      <Button
                        variant="contained"
                        color="primary"
                        href="#contained-buttons"
                        onClick={sendMSG}
                      >
                        SEND
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid itme xs={4}>
                <div></div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
