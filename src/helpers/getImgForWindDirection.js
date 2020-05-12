import React from "react";
import { ReactComponent as Direction } from "../assets/icons/direction.svg";
import styled from "styled-components";

const DirectionSvg = styled(Direction)`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
const Text = styled.p``;

export const getImgForWindDirection = (windDirection) => {
  switch (windDirection) {
    case "pd":
      return (
        <>
          <DirectionSvg
            style={{
              transform: "rotate(-40deg)",
            }}
          />
          <Text>Południowy</Text>
        </>
      );
    case "pd-zach":
      return (
        <>
          <DirectionSvg
            style={{
              transform: "rotate(10deg)",
            }}
          />
          <Text>Pd.-Zach.</Text>
        </>
      );
    case "pd-wsch":
      return (
        <>
          <DirectionSvg
            style={{
              transform: "rotate(-70deg)",
            }}
          />
          <Text>Pd.-Wsch.</Text>
        </>
      );
    case "zach":
      return (
        <>
          <DirectionSvg
            style={{
              transform: "rotate(50deg)",
            }}
          />
          <Text>Zachodni</Text>
        </>
      );
    case "pn-zach":
      return (
        <>
          <DirectionSvg
            style={{
              transform: "rotate(80deg)",
            }}
          />
          <Text>Pn.-Zach.</Text>
        </>
      );
    default:
      return "";
  }
};
