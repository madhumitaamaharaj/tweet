import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import foot from "./footer.module.css";

const Footer = () => {
  return (
    <div className={foot.main_container}>
      <div className={foot.left}>
        <h1>Don't miss what's happening</h1>
        <p>People on Twitter are the first to know.</p>
      </div>
      <div className={foot.right}>
        <NavLink to="/login">
          <Button
            className={foot.log}
            variant="outlined"
            sx={{
              color: "white",
              borderRadius: "14px",
              border: "1px solid white",
              backgroundColor: "transparent",
              textTransform: "none",
            }}
          >
            Log in
          </Button>
        </NavLink>
        <NavLink to="/signup">
          <Button
            className={foot.sign}
            variant="contained"
            sx={{
              color: "black",
              borderColor: "rgba(0, 0, 0, 0)",
              backgroundColor: "rgb(239, 243, 244)",
              borderRadius: "14px",
              outline: "none",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgb(228, 228, 228)",
                color: "black",
              },
            }}
          >
            Sign up
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
