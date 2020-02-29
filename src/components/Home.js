import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Typography,
  Container,
  Grid,
  TextField,
  Paper,
  Select,
  InputLabel,
  MenuItem,
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import axios from "axios";
import history from "./history";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

export default function Home() {
  const classes = useStyles();
  const [data, setData] = useState(["Select Your Category"]);
  const [item, setItem] = useState(["Select item"]);
  const [category, setCategory] = useState("No Category Selected");
  const [items, setItems] = useState([]);
  const Items = ["Fan", "Light", "Tight"];

  const handleSubmit = () => {
    const postItems = async() =>{

    }
    history.push("/e-waste");
    window.location.reload();
  };

  const fetchData = (id, event) => {
    console.log("category id", id);
    switch (id) {
      case "1":
        setCategory("Small Appliances");
        break;
      case "2":
        setCategory("Large Appliances");
        break;
      case "3":
        setCategory("Mobile and Computers");
    }

    console.log(category);
    const fetchWasteList = async () => {
    //   const result = await axios(`http://localhost:8081/catalog/${id}`);
      //   setData(result.data);
      setData([
        {
          id: 1,
          name: "Mobile phone",
          itemCategory: {
            id: 1,
            name: "Mobile and Computers",
            desc: null
          }
        },
        {
          id: 2,
          name: "EarPhone",
          itemCategory: {
            id: 1,
            name: "Mobile and Computers",
            desc: null
          }
        }
      ]);
    };
    fetchWasteList().then(console.log("Data Loaded : ", data));
  };

  function inputHandler(event) {
    const element = event.target.value;
    console.log(element)
    setItems([...items, element]);
    console.log("Value", event.target.value, items);
  }

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4} sm={4} lg={4}>
          <ButtonBase
            focusRipple
            name="Large Appliances"
            key={2}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "400px",
              padding: "15px",
              margin: "20px"
            }}
            onClick={e => fetchData("2", e)}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url("/images/LargeWaste.png")`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                LARGE APPLIANCES
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </Grid>
        <Grid item xs={4} sm={4} lg={4}>
          <ButtonBase
            focusRipple
            name="Small Appliances"
            key={1}
            className={classes.image}
            onClick={e => fetchData("1", e)}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "400px",
              padding: "15px",
              margin: "20px"
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url("/images/SmallWaste.png")`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                SMALL APPLIANCES
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </Grid>
        <Grid item xs={4} sm={4} lg={4}>
          <ButtonBase
            focusRipple
            name="Mobile and Computer"
            key={3}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            onClick={e => fetchData("3", e)}
            style={{
              width: "400px",
              padding: "15px",
              margin: "20px"
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url("/images/MobileComputer.png")`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                MOBILE and COMPUTER
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </Grid>
      </Grid>
      <Grid container alignContent="center">
        <Grid item xs={12}>
          <Typography component="div">
            <Box fontStyle="normal" m={1}>
              Add your items {category}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper
            className="inputBox"
            width="50px"
            style={{ margin: "15px", paddingTop: "10px" }}
          >
            <InputLabel id="demo-simple-select-label">
              Select your Items based on Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="item"
              fullWidth
              autoComplete="species_id"
              value={item || "Add Item"}
              onChange={inputHandler}
            >
              {data.map((element, index) => (
                <MenuItem key={index} value={element}>
                  {element.name}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ITEM NAME</TableCell>
                  <TableCell align="center">QUANTITY</TableCell>
                  <TableCell align="center">DELETE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" align="center">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        id="outlined"
                        label="Quantity"
                        variant="outlined"
                        type="number"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            style={{ margin: "20px" }}
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
