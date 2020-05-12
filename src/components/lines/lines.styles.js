import styled from "styled-components";
import LineTo from "react-lineto";

export const Line = styled(LineTo)`
  margin-top: 20px;
  ::after {
    content: " ";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    border: 1px solid black;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
`;
