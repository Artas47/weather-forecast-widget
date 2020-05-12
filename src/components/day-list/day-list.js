import React from "react";
import * as Styled from "./day-list.styles";
import DayItem from "../day-item/day-item";
import { data } from "../../data/data";
import { sideScroll } from "../../helpers/onClickSmoothly";

const DayList = () => {
  return (
    <>
      <Styled.DayListContainer>
        <Styled.DayListLabels>
          <Styled.DayListLabelsDay>Dzień</Styled.DayListLabelsDay>
          <Styled.DayListLabelsHour>Godzina</Styled.DayListLabelsHour>
          <Styled.DayListLabelsForecast>Prognoza</Styled.DayListLabelsForecast>
          <Styled.DayListLabelsTemperature>
            Temperatura
          </Styled.DayListLabelsTemperature>
          <Styled.DayListLabelsRainfall>Opady</Styled.DayListLabelsRainfall>
          <Styled.DayListLabelsDayWindDirection>
            Kierunek wiatru
          </Styled.DayListLabelsDayWindDirection>
          <Styled.DayListLabelsDayWindSpeed>
            Prędkość wiatru
          </Styled.DayListLabelsDayWindSpeed>
          <Styled.DayListLabelsDayPressure>
            Ciśnienie
          </Styled.DayListLabelsDayPressure>
        </Styled.DayListLabels>
        <Styled.DayListScrollButtonRight
          onClick={() => sideScroll("right", 90)}
        />
        <Styled.DayListScrollButtonLeft
          onClick={() => sideScroll("left", 90)}
        />
        <Styled.DaysList
          hideScrollbars={false}
          vertical={false}
          className="container"
        >
          {data.map((item, index) => (
            <DayItem
              key={item.day + index}
              day={item.day}
              hour={item.hour}
              forecast={item.forecast}
              temperature={item.temperature}
              rainfall={item.rainfall}
              windDirection={item.windDirection}
              windSpeed={item.windSpeed}
              pressure={item.pressure}
              index={index + 1}
            />
          ))}
        </Styled.DaysList>
      </Styled.DayListContainer>
    </>
  );
};

export default DayList;
