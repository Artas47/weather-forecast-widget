import styled, { css } from "styled-components";
export const DayItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 9rem;
  min-width: 9rem;
  max-width: 9rem;
  border-right: 1.5px solid #e8e8e8;
  margin-top: 2rem;
  ${({ hour }) =>
    hour === "23:00" &&
    css`
      margin-top: 0;
      padding-top: 2rem;
    `}
`;

export const DayItemCurrentDay = styled.div`
  position: absolute;
  top: -2rem;
  left: -1.5px;
  height: 2rem;
  padding-left: 1.5rem;
  font-size: 1.7rem;
  font-weight: 600;
  color: #858585;
  ${({ hour }) =>
    hour !== "00:00" &&
    css`
      display: none;
    `}
`;
export const DayItemHour = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  margin-top: 1rem;
  height: 2rem;
`;

export const DayItemForecast = styled.div`
  height: 5rem;
`;

export const DayItemTemperatureContainer = styled.div`
  min-height: 28rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -5rem;
`;

export const DayItemTemperatureNumber = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  ${({ temperature }) => {
    if (parseInt(temperature) >= 7) {
      return `margin-bottom: ${parseInt(temperature) * 10}px`;
    } else {
      return `margin-top: ${parseInt(temperature) * -10}px`;
    }
  }}
`;

export const DayItemRainfallContainer = styled.div`
  position: relative;
  height: 8rem;
`;

export const DayItemRainfallNumber = styled.p`
  font-size: 1.3rem;
  ${(props) =>
    props.rainfall === "0" &&
    css`
      visibility: hidden;
    `}
`;

export const DayItemRainfallIndication = styled.div`
  background-color: #34ccff;
  position: absolute;
  bottom: 0;
  width: 100%;
  ${(props) =>
    props.rainfall &&
    css`
      height: ${props.rainfall * 13}px;
      :after {
        content: "${props.rainfall} mm";
        font-size: 1.3rem;
        position: absolute;
        width: 100%;
        top: -1.5rem;
        left: 50%;
        transform: translate(-50%, 0);
      }
    `}
  ${(props) =>
    props.rainfall === "0" &&
    css`
      visibility: hidden;
    `}
`;

export const DayItemWindDirection = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const DayItemWindSpeed = styled.div`
  font-size: 1.5rem;
`;

export const DayItemPressureContainer = styled.div`
  min-height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DayItemWindContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 15rem;
  background-color: #f0f0f0;
`;

export const DayItemSup = styled.sup`
  display: inline-block;
  width: 6px;
  height: 6px;
  border: 1.5px solid black;
  border-radius: 50%;
  color: red;
  margin-bottom: -0.5px;
  margin-left: 1px;
`;

export const DayItemWindSpeedText = styled.p`
  font-size: 1.5rem;
`;

export const DayItemPressureNumber = styled.span`
  font-size: 1.3rem;
  ${({ pressure }) => {
    if (parseInt(pressure) >= 1014) {
      return `margin-bottom: ${parseInt(pressure.slice(2, 4)) * 5}px`;
    } else {
      return `margin-top: ${-parseInt(pressure.slice(2, 4)) * 5}px`;
    }
  }}
`;
