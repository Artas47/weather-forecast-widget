import styled, { css } from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const DayListContainer = styled.div`
  position: relative;
  width: 70%;
  height: 60rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  overflow: hidden;
  :after {
    content: "";
    position: absolute;
    top: 0;
    right: -10rem;
    height: 100%;
    width: 8rem;
    box-shadow: -5rem 0 10rem 3rem #fff;
    z-index: 1;
    pointer-events: none;
  }
`;

export const DaysList = styled(ScrollContainer)`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  color: black;
  border-bottom: 1.5px solid #e8e8e8;
  transition: all 0.2s ease-in-out;
  overflow-y: hidden;
  overflow-x: scroll;
  z-index: 1;
  text-shadow: 0 0 black;
  color: rgba(0, 0, 0, 0);
`;

export const ScrollRightButton = styled.div`
  position: fixed;
  min-width: 50px;
  top: 50%;
  left: 0;
  height: 50px;
  z-index: 999;
  background-color: red;
`;

export const DayListLabels = styled.div`
  min-width: 10rem;
  font-size: 1.1rem;
  color: #a3a3a3;
  z-index: 3;
  background-color: #fff;
  font-weight: 600;
  :after {
    content: " ";
    position: absolute;
    top: 0;
    left: 10rem;
    height: 100%;
    width: 1rem;
    box-shadow: inset 10px 1px 10px -8px #aaaaaa;
    z-index: 999;
    pointer-events: none;
  }

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;

    :not(:last-child) {
      border-bottom: 1px solid #e8e8e8;
    }
  }
`;

const ScrollButton = css`
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translate(50%, -50%);
  width: 9rem;
  height: 9rem;
  border: none;
  opacity: 0.3;
  outline: none;
  background-color: #6e6e6e;
  :after {
    content: " ";
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    position: absolute;
    top: 50%;
  }
`;

export const DayListScrollButtonRight = styled.button`
  ${ScrollButton}
  right: 0;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  :after {
    border-left: 20px solid #fff;
    left: 1.6rem;
    transform: translate(0, -50%);
  }
`;
export const DayListScrollButtonLeft = styled.button`
  ${ScrollButton}
  left: 1rem;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
  :after {
    border-right: 20px solid #fff;
    right: 1.6rem;
    transform: translate(0, -50%);
  }
`;

export const DayListLabelsDay = styled.div`
  height: 2rem;
`;

export const DayListLabelsHour = styled.div`
  margin-top: 1rem;
  height: 2rem;
`;

export const DayListLabelsForecast = styled.div`
  height: 5rem;
`;

export const DayListLabelsTemperature = styled.div`
  height: 18rem;
`;
export const DayListLabelsRainfall = styled.div`
  height: 5rem;
`;
export const DayListLabelsDayWindDirection = styled.div`
  height: 8rem;
`;
export const DayListLabelsDayWindSpeed = styled.div`
  height: 7rem;
`;
export const DayListLabelsDayPressure = styled.div`
  height: 12rem;
`;
