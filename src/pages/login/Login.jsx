import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import logo from "../images/logo.png";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import log from "./login.module.css";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import Footer from "../../footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData"));
    setUserList(data);
  }, []);

  function handleLogin() {
    if (email.length === 0 || password.length === 0) {
      swal("Alert", "Please Fill the required Input Field!", "warning");
    } else if (userList !== null) {
      const userFind = userList.find(
        (x) => x.userEmail === email && x.userPassword === password
      );
      if (!userFind) {
        swal("Alert", "No user found. Please sign up!!", "warning");
        setEmail("");
        setPassword("");
      } else {
        swal("Great Job !!", "You are Successfully Login!!", "success");
        const curUser = JSON.parse(localStorage.getItem("userData")).filter(
          (user) => user.userEmail === email
        );
        localStorage.setItem("currentUser", JSON.stringify(...curUser));
        localStorage.setItem("login-success", "true");
        nav("/");
      }
    } else {
      swal("Alert", "Please SignUp First!!", "warning");
    }
  }
  return (
    <>
      <div className={log.main_container}>
        <div className={log.inner_container}>
          <div className={log.image}>
            <img src={logo} alt="logoimage" />
          </div>
          <div className={log.content}>
            <h1>Sign in to Twitter</h1>
            <div className={log.apple}>
              <Button
                className={log.forget}
                variant="contained"
                sx={{
                  display: "block",
                  borderRadius: "20px",
                  margin: "auto",
                  color: "black",
                  backgroundColor: "white",
                  outline: "none",
                  border: "none",
                  width: "100%",
                  marginBottom: "10px",
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
                className={log.forget}
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
                  marginBottom: "10px",
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
            <div className={log.divide}>
              <Divider>OR</Divider>
            </div>
            <div className={log.input}>
              <TextField
                id="outlined-basic-email"
                value={email}
                label="Email"
                type="email"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(event) => setEmail(event.target.value)}
                sx={{
                  display: "block",
                  margin: "1rem 0",
                }}
              />

              <TextField
                id="outlined-basic-password"
                value={password}
                type="password"
                label="Password"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(event) => setPassword(event.target.value)}
                sx={{
                  display: "block",
                }}
              />

              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "black",
                  outline: "none",
                  border: "none",
                  margin: "1rem 0",
                  width: "100%",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "red",
                  },
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button
                className={log.forget}
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  backgroundColor: "white",
                  outline: "none",
                  border: "none",
                  marginTop: "0",
                  width: "100%",
                  marginBottom: "10px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgb(228, 228, 228)",
                  },
                }}
              >
                Forget Password ?
              </Button>
              <div className={log.link}>
                <h3>
                  Don't have an account?
                  <Link to="/signup">
                    <span>Sign up</span>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
