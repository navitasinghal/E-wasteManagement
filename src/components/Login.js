import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  CssBaseline,
  Button,
  Checkbox,
  Grid,
  Link,
  Box,
  Avatar,
  Card
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import Copyright from "@material-ui/icons/Copyright";
import "./login.css";
import Navbar from "./Navbar";

function Login() {
  const [redirect, setRedirect] = useState(true);
  const [response, setResponse] = useState();
  const LOGIN_URL = "";

  const PostData = () => {
    Axios.post(LOGIN_URL, response).then(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  };

  const getData = () => {};

  function signup(res, type) {
    setRedirect(true);
    console.log(res, type);
    PostData().then(result => {
      let responseJson = result;
      if (responseJson.userData) {
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        setRedirect(true);
      }
    });
  }

  const responseGoogle = res => {
    console.log(res);
    setResponse(res);
    signup(response, "google");
  };


  const login = () =>{
      setRedirect(true)
  }

  const Home = () => {
    if (redirect) {
      return <Navbar />;
    } else {
      return <LoginPage />;
    }
  };

  const LoginPage = () => {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card variant="outlined" className="card">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="form" noValidate>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              onClick={login}
            >
              Sign In
            </Button>

            <GoogleLogin
              button
              fullWidth
              className="googleButton"
              clientId="552672078771-qne4s62sl48l53mq11omq33qjg2hrp97.apps.googleusercontent.com"
              buttonText="LOGIN with GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            {/* <FacebookLogin button
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      /> */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    );
  };

  return <Home />;
}

export default Login;
