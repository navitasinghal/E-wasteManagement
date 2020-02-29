import React, { Fragment, useState } from "react";
import GoogleMapReact from "google-map-react";
// import GetLocation from "./GetLocation";
import { usePosition } from "use-position";
import Maps from "./Maps.png";



export default function LocateEbin() {
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);
  console.log(latitude, longitude, timestamp, accuracy, error);

  const AnyReactComponent = ({ text }) => (
    <div
      style={{
        color: "white",
        background: "grey",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)"
      }}
    >
      {text}
    </div>
  );
  const defaultProps = {
    // center: { lat: latitude, lng: longitude},
    center: [59.938043, 30.337157],
    zoom: 10,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  return (
    <Fragment>
      <div style={{ height: "100vh", width: "100vh" }}>
        <div>Find the nearest E-bin</div>
        <img src={Maps} width="100%" height="100%" style={{marginLeft:"30%"}}/>
        {/* <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={31.337844} text={"C"} />
          <AnyReactComponent lat={59.955413} lng={30.337844} text={'A'} />
        <AnyReactComponent lat= {59.724465} lng ={30.080121} text={'B'} />
        </GoogleMapReact> */}
      </div>
    </Fragment>
  );
}
