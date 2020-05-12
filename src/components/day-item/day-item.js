import React from "react";
import * as Styled from "./day-item.styles";
import { getSvgForForecast } from "../../helpers/getSvgForForecast";
import { getImgForWindDirection } from "../../helpers/getImgForWindDirection";
import { getWindSpeed } from "../../helpers/getWindSpeed";

const DayItem = ({
  day,
  hour,
  forecast,
  temperature,
  rainfall,
  windDirection,
  windSpeed,
  pressure,
  index,
}) => {
  return (
    <Styled.DayItem hour={hour}>
      <Styled.DayItemCurrentDay hour={hour}>{day}</Styled.DayItemCurrentDay>
      <Styled.DayItemHour>{hour}</Styled.DayItemHour>
      <Styled.DayItemForecast>
        {getSvgForForecast(forecast)}
      </Styled.DayItemForecast>
      <Styled.DayItemTemperatureContainer>
        <Styled.DayItemTemperatureNumber
          temperature={temperature}
          className={`T${index}`}
        >
          {temperature}
          <Styled.DayItemSup />
        </Styled.DayItemTemperatureNumber>
      </Styled.DayItemTemperatureContainer>
      <Styled.DayItemRainfallContainer>
        <Styled.DayItemRainfallIndication rainfall={rainfall} />
      </Styled.DayItemRainfallContainer>
      <Styled.DayItemWindContainer>
        <Styled.DayItemWindDirection>
          {getImgForWindDirection(windDirection)}
        </Styled.DayItemWindDirection>
        <Styled.DayItemWindSpeed>
          {getWindSpeed(windSpeed)}
        </Styled.DayItemWindSpeed>
      </Styled.DayItemWindContainer>
      <Styled.DayItemPressureContainer>
        <Styled.DayItemPressureNumber
          className={`P${index}`}
          pressure={pressure}
        >
          {pressure} hPa
        </Styled.DayItemPressureNumber>
      </Styled.DayItemPressureContainer>
    </Styled.DayItem>
  );
};

export default DayItem;
