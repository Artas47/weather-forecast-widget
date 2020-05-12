import React, { useEffect, useState } from "react";
import * as Styled from "./lines.styles";
import { data } from "../../data/data";

const styleTemp = {
  delay: true,
  borderColor: "gold",
  borderStyle: "solid",
  borderWidth: 1,
};

const stylePress = {
  delay: true,
  borderColor: "black",
  borderStyle: "solid",
  borderWidth: 1,
};

const Lines = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  //triggering rerenders when resize to position the lines properly
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      window.addEventListener("resize", handleResize);
    };
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return data.map((item, index) => {
    return (
      <>
        <Styled.Line
          from={`T${index}`}
          to={`T${index + 1}`}
          within="container"
          {...styleTemp}
        />
        <Styled.Line
          from={`P${index}`}
          to={`P${index + 1}`}
          within="container"
          {...stylePress}
        />
      </>
    );
  });
};

export default Lines;
