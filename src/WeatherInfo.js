import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} /> {props.data.description}
            </li>
            <li>
              Humidity: {props.data.humidity}% , Wind: {props.data.wind}km/h
            </li>
          </ul>
        </div>
        <div class="col-6">
          <div class="temperature-container d-flex justify-content-end">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="Weather-temperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
