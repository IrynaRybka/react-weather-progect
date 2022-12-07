import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    const maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function minTemperature() {
    const minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
