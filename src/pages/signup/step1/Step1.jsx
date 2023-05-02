import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import s1 from "./step1.module.css";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";

const Step1 = (props) => {
  return (
    <div className={s1.main_container}>
      <div className={s1.inner_container}>
        <div className={s1.image}>
          <img src={logo} alt="logoimage" />
        </div>
        <div className={s1.content}>
          <h1>Join Twitter today</h1>
          <div className={s1.apple}>
            <Button
              className={s1.forget}
              variant="contained"
              sx={{
                display: "block",
                borderRadius: "20px",
                color: "black",
                backgroundColor: "white",
                outline: "none",
                border: "none",
                width: "100%",
                margin: "1rem 0",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <span>
                <FcGoogle />
              </span>
              Sign in with Google
            </Button>
            <Button
              className={s1.forget}
              variant="contained"
              sx={{
                display: "block",
                margin: "auto",
                borderRadius: "20px",
                color: "black",
                backgroundColor: "white",
                outline: "none",
                border: "none",
                width: "100%",
                marginBottom: "1rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgb(228, 228, 228)",
                },
              }}
            >
              <span>
                <BsApple />
              </span>
              Sign in with Apple
            </Button>
          </div>
          <div className={s1.divide}>
            <Divider>OR</Divider>
          </div>
          <div className={s1.input}>
            <Button
              onClick={props.onClick}
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                backgroundColor: "black",
                outline: "none",
                border: "none",
                margin: "1rem 0",
                width: "100%",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "black",
                  color: "grey",
                },
              }}
            >
              Create account
            </Button>
          </div>
          <div className={s1.content}>
            <p>
              By signing up, you agree to the <span>Terms of Service</span> and
              <span>Privacy Policy</span>, including <span>Cookie Use.</span>
            </p>
          </div>
          <div className={s1.link}>
            <h3>
              Already have an account?
              <Link to="/login">
                <span>Log in</span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
