import React, { useState} from "react";
import s5 from "./step5.module.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { globalUserObj ,globalUserData } from "../recoil";
import { useRecoilState } from "recoil";
import swal from "sweetalert";

const Step5 = () => {

  const nav=useNavigate()
  const [password, setPassword] = useState("");
  const [globalData, setGobalData] = useRecoilState(globalUserObj);
  const[globalUser,setGobalUser]=useRecoilState(globalUserData)

 

  function handleNext(){
    if(!(password.length>=8)){
      swal("Alert", "password should be greater than 8 Character!!", "warning");
    }
    else{ 
      const user={
        userPassword:password
    }
      setGobalData({...globalData,...user});
      setGobalUser([...globalUser,globalData]);
      const oldData = JSON.parse(localStorage.getItem("userData")) || []
      localStorage.setItem("userData",JSON.stringify([...oldData,{...globalData,...user}])); 
      swal("Hurray!", "You Successfully Registered!", "success");
      nav("/login")  
     
    }
   
  }
  // console.log(globalData)
  // console.log(globalUser)
  return (
    <div className={s5.main_container}>
      <div className={s5.inner_container}>
        <div className={s5.heading}>
          <h3> Step 5 of 5</h3>
          <h1>You'll need a password</h1>
          <p>Make sure it's 8 characters or more.</p>
        </div>
        <div className={s5.input}>
          <TextField
            id="outlined-basic-name"
            value={password}
            label="Password"
            variant="outlined"
            type="password"
            size="small"
            fullWidth
            onChange={(event) => setPassword(event.target.value)}
            helperText={
              !password ? "Password is required" : "Don't Share your password"
            }
            error={!password}
            sx={{
              display: "block",
              margin: "1rem 0",
              marginBottom: "0px",
            }}
          />
        </div>
        <div className={s5.next}>
            <Button
              onClick={handleNext}
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                backgroundColor: "grey",
                color: "white",
                outline: "none",
                border: "none",
                margin: "1rem 0",
                width: "100%",
                textTransform: "none",
                fontSize: "1.2rem",
                "&:hover": {
                  backgroundColor: "black",
                  color: "grey",
                },
              }}
            >
              Next
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
