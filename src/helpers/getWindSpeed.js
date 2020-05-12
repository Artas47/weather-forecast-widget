import React from "react";

export const getWindSpeed = (speed) => {
  const windSpeed = parseInt(speed);
  if (windSpeed <= 17) {
    return (
      <>
        <p>Słaby</p>
        {speed} km/h
      </>
    );
  }
  if (windSpeed <= 25) {
    return (
      <>
        <p>Umiar.</p>
        {speed} km/h
      </>
    );
  }
};
