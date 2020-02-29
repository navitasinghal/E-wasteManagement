import React, { Fragment, useState, useEffect } from "react";
import { Card, Container, Grid, Paper , Typography} from "@material-ui/core";
import "./reward.css";

function Rewards() {
  const rewardList = [
    { id: 1, time: "2:00", price: "50", open: false  , date: "28/02/2020" , item : "2 battries"},
    { id: 2, time: "3:00", price: "650", open: false  , date : "28/02/2020" , item : "Mobile Phone"},
    { id: 3, time: "4:00", price: "3950", open: false , date: "29/02/2020" , item : "Refrigerator"},
  ];
  const [rewards, setReward] = useState(rewardList);
  return (
    <Fragment>
      <Grid container spacing={6}>
        {rewards.map((item, index) => (
          <Grid item sm={4} xs={12} key={item.key}>
            <Paper className="paper" elevation={2} style={{padding:"40px" ,height:"100%"}}>
            <Typography component="h1" variant="h6" color="inherit"  >
             You have been rewarded with INR {item.price} from the E-waste collected on {item.date} for {item.items}
             </Typography>
            </Paper>
          </Grid>
        ))}
        <Grid item sm={4} xs={12} >
            <Paper elevation={3} style={{padding:"40px" ,height:"100%" , backgroundColor:"#50d4974f !important"}}>
            <Typography component="h1" variant="h6" color="inherit"  >
             Click here to get your reward
             </Typography>
            </Paper>
          </Grid>
      </Grid>
    </Fragment>
  );
}

export default Rewards;
