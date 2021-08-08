import React, { useState } from "react";
import "./SignIn.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function SignIn() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const signin = (e) => {
    e.preventDefault();
    if (!name || !email || !pass) {
      alert("Credentials can not be blank !!");
    } else {
      alert(
        `You've been signed in with the following credentials:- ${name} ${email} ${pass}`
      );
    }
    setname("");
    setemail("");
    setpass("");
  };
  const parseStyle = {
    padding: "30px",
    height: "fit-content",
    width: 280,
    margin: "30px auto",
  };
  return (
    <Grid className="grid">
      <Paper elevation={10} style={parseStyle}>
        <h3>Sign In</h3>
        <TextField
          style={{ margin: "10px auto", width: "80%" }}
          id="input-with-icon-textfield"
          label="Profile Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
                position="start"
              >
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          style={{ margin: "10px auto", width: "80%" }}
          id="input-with-icon-textfield"
          label="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
                position="start"
              >
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          style={{ margin: "10px auto", width: "80%" }}
          id="input-with-icon-textfield"
          label="Password"
          type="password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
                position="start"
              >
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
        />
        <p style={{ textAlign: "center", fontSize: "12px" }}>
          Forgot Password?
        </p>
        <Button
          style={{ marginTop: "10px", width: "60%", height: "40px" }}
          color="primary"
          type="submit"
          onClick={(e) => signin(e)}
        >
          Sign In
        </Button>
        <p>Or Sign-Up using</p>
        <div className="logos">
          <Icon className="fa google" />
          <FacebookIcon
            style={{
              fontSize: "29px",
              top: "0.4vh",
              position: "relative",
              paddingRight: "20px",
            }}
          />
          <GitHubIcon />
        </div>
      </Paper>
    </Grid>
  );
}