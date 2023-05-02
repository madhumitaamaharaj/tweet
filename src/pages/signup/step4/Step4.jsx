import React, { useState} from 'react'
import s4 from "./step4.module.css";
import { Button, TextField } from "@mui/material";
import { globalUserObj } from "../recoil";
import { useRecoilState } from "recoil";

const Step4 = (props) => {
  const [email, setEmail] = useState("");
  const[globalData,setGobalData]=useRecoilState(globalUserObj)
 

  function handleNext(){
    if(!(email.includes("@"))){
      swal("Alert", "Enter a valid Email!!", "warning");
    }
    else{ 
      const user={
      userEmail:email
    }
      setGobalData({...globalData,...user}); 
      props.onClick()
    }
   
  }
  return (
    <div className={s4.main_container}>
      <div className={s4.inner_container}>
        <div className={s4.heading}>
          <h3> Step 4 of 5</h3>
          <h1>Create your account</h1>
        </div>
        <div className={s4.input}>
          <TextField
            id="outlined-basic-name"
            value={globalData.userFullName}
            label="Name"
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            disabled={true}
            sx={{
              display: "block",
              margin: "1rem 0",
              marginBottom: "0px",
            }}
          />

          <TextField
            id="outlined-basic-email"
            value={globalData.userPhone}
            label="Phone"
            type="phone"
            variant="outlined"
            size="small"
            fullWidth
            disabled={true}
            sx={{
              display: "block",
              marginTop: "0",
              margin: "1rem 0",
            }}
          />
          <TextField
            id="outlined-basic-email"
            value={email}
            label="Email"
            type="text"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(event) => setEmail(event.target.value)}
            helperText={!email ? "Email is required": ""}
            error={!email}
            sx={{
              display: "block",
              marginTop: "0",
              margin: "1rem 0",
            }}
          />
        </div>
        <div className={s4.content}>
            <p>By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use</span>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span>Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span>here</span>.</p>
        </div>
        <div className={s4.next}>
            <Button onClick={()=>{handleNext()}}
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
              Sign up
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Step4
