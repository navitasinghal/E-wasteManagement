import React, { Fragment } from "react";
import QRcode from "react-qr-code";
import { Container, CssBaseline, Typography } from "@material-ui/core";

export default function QRCode() {
  return (
    <Fragment>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <QRcode
          value={{ killit: "dsdd", Hello: "world" }}
          style={{ margin: "30%", padding: "10%" }}
        />
        <Typography variant="h6" className="title">
          Display your QR-code on the E-bin to dispose E-waste and redeem exciting cash back.
        </Typography>
      </Container>
    </Fragment>
  );
}
