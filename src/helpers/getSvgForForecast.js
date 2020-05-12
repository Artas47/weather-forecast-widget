import React from "react";
import { ReactComponent as CloudSvg } from "../assets/icons/cloud.svg";
import { ReactComponent as CloudSunSvg } from "../assets/icons/cloud-sun.svg";
import { ReactComponent as SunSvg } from "../assets/icons/sun.svg";
import { ReactComponent as RainSvg } from "../assets/icons/cloud-rain.svg";

const styles = {
  width: "5rem",
  height: "5rem",
};

export const getSvgForForecast = (forecast) => {
  switch (forecast) {
    case "pochmurnie":
      return <CloudSvg style={styles} />;
    case "czesciowo-slonecznie":
      return <CloudSunSvg style={styles} />;
    case "slonecznie":
      return <SunSvg style={styles} />;
    case "deszczowo":
      return <RainSvg style={styles} />;
    default:
      return "";
  }
};
