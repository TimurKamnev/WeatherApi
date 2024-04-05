import React, { useState } from "react";
import "../src/components/desctop.scss";
import "./style.css";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import WeatherCard from "./components/WeatherCard/weather-card";
import WeatherBody from "./components/WeatherBody/weather-body";
import { Weather } from "./Types/Weather";

function Desctop() {
  const [weather, setWeather] = useState<Weather | null>(null);

  // GeneralBackground
  const getBackgroundClass = () => {
    if (weather?.weather && weather.weather[0]) {
      const weatherType = weather.weather[0].main.toLowerCase();
      if (weatherType === "rain") {
        return "rain-background";
      } else if (weatherType === "snow") {
        return "snow-background";
      } else if (weatherType === "mist" || weatherType === "drizzle") {
        return "mist-background";
      } else if (weatherType === "smoke") {
        return "smoke-background";
      } else if (weatherType === "clouds" || weatherType === "clear") {
        return "cloud-background";
      }
    }
    return "default-background";
  };

  return (
    <div className={`container ${getBackgroundClass()}`}>
      <div className="weather-card">
        <WeatherCard
          weatherState={weather}
          onWeatherUpdate={(weather) => setWeather(weather)}
        />
      </div>
      <div className="weather-body">
        <WeatherBody weatherState={weather} onWeatherUpdate={setWeather} />
      </div>
    </div>
  );
}

export default Desctop;
