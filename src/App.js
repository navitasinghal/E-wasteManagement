import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Grid } from "@material-ui/core";

function App() {


  return (
    <div className="App">
      <Grid container spacing={4}>
        <Login />
      </Grid>
    </div>
  );
}

export default App;
