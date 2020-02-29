import React from "react";
import { usePosition } from "use-position";

export default function GetLocation() {
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);
  console.log(latitude, longitude, timestamp, accuracy, error);

  return (
    <code>
      latitude: {latitude}
      <br />
      longitude: {longitude}
      <br />
      timestamp: {timestamp}
      <br />
      accuracy: {accuracy && `${accuracy}m`}
      <br />
      error: {error}
    </code>
  );
}
