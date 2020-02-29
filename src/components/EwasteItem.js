import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Grid,
  Typography,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Location from "@material-ui/icons/MyLocation";
import QRCode from "@material-ui/icons/CenterFocusStrong";
import history from "./history";

const useStyles = makeStyles({
  table: {
    minWidth: 850
  },
  title: {
    flexGrow: 1
  },
  button: {
    margin: "10px",
    padding: "10px"
  }
});
export default function EwasteItem() {
  const classes = useStyles();
  const rows = [
    { name: "Mobile", price_range: "50-100" },
    { name: "Laptop", price_range: "500-600" }
  ];
  const large = [
    { name: "Washing Machine", price_range: "2000-3000" }
  ];

  const handleLocation = () => {
    history.push("/location");
    window.location.reload();
  };
  const handleQRCode = () => {
    history.push("/qr-code");
    window.location.reload();
  };
  const handleAddress = () => {
    history.push("/profile");
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Grid container spacing={4} alignContent="center">
        <Paper
          elevation={3}
          style={{
            color: "grey",
            backgroundColor: "aliceblue",
            padding: "20px",
            margin: "20px",
            marginLeft:"15vw"
          }}
        >
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Smart Bin E-waste
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Price Range&nbsp;(INR)</TableCell>
                    {/* <TableCell align="center">Delete</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row" align="center">
                        {row.name}
                      </TableCell>
                      <TableCell align="right"> {row.price_range}</TableCell>
                      {/* <TableCell align="right"> {row.price_range}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<Location />}
              onClick={handleLocation}
            >
              Locate E-bin
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<QRCode />}
              onClick={handleQRCode}
            >
              Generate QR Code
            </Button>
          </Grid>
        </Paper>
      </Grid>

      <Grid container spacing={4} alignContent="center">
        <Paper
          elevation={3}
          style={{
            color: "grey",
            backgroundColor: "floralwhite",
            padding: "20px",
            margin: "20px",
            flex:1,
            marginLeft:"15vw"
          }}
        >
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Collection Drive E-waste
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Price Range&nbsp;(INR)</TableCell>
                    {/* <TableCell align="center">Delete</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {large.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row" align="center">
                        {row.name}
                      </TableCell>
                      <TableCell align="right"> {row.price_range}</TableCell>
                      {/* <TableCell align="right"> {row.price_range}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleAddress}
            >
              Schedule Collection Drive
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
