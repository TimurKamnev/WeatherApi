import React, { useEffect, useState } from "react";
import { Weather } from "../Types/Weather";
import { WeatherCardProps } from "../Types/WeatherProps";

const api = {
  key: "8c51daf75706bc85a02f3ade841d4145",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function WeatherCard({
  weatherState,
  onWeatherUpdate,
}: WeatherCardProps) {
  const [open, isOpen] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // ChangeCloudDependsOnWeather
  const getWeatherIcon = () => {
    if (weather?.weather && weather.weather[0]) {
      const weatherType = weather.weather[0].main.toLowerCase();
      if (weatherType === "rain") {
        return "./rain_cloud.svg";
      } else if (weatherType === "snow") {
        return "./snowy_cloud.svg";
      } else if (
        weatherType === "mist" ||
        weatherType === "smoke" ||
        weatherType === "drizzle"
      ) {
        return "./mist_cloud.svg";
      }
    }
    return "./cloud-image.svg";
  };

  const searchPressed = () => {
    if (search.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((result) => {
        onWeatherUpdate(result);
        setWeather(result);
        setError(null);
      })
      .catch((error) => {
        setError("City not found");
        console.error("Error fetching weather data:", error);
      });
  };

  useEffect(() => {
    searchPressed();
  }, []);

  return (
    <>
      <div className="country-info">
        <div className="logo-justify">
          <div className="country-bar">
            <img className="weather" src="./con-icon.svg" alt="weather-icon" />
            <div className="my-own-flex">
              <input
                type="text"
                placeholder="Enter Country/City..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchPressed();
                  }
                }}
              />
            </div>
            <div
              className={`rotation-accordion ${open ? "open" : ""}`}
              onClick={() => isOpen(!open)}
            >
              <svg
                width="11"
                height="15"
                viewBox="0 0 11 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 20L10 10.5L1 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <img className="logo-mob" src="./logo-fake.svg" alt="user-logo" />
        </div>
        {weather && !error ? (
          <>
            <h1>{weather.weather[0].main}</h1>
            <img className="mobile" src={getWeatherIcon()} alt="cloud-img" />
            <div className="country-celsius">
              <h2>{weather.main.temp}°C</h2>
              <p>{new Date().toDateString()}</p>
            </div>
          </>
        ) : (
          <>
            <h1>Sky</h1>
            <img className="mobile" src={getWeatherIcon()} alt="cloud-img" />
            <div className="country-celsius">
              <h2>0°C</h2>
              <p>{new Date().toDateString()}</p>
            </div>
          </>
        )}
      </div>
      <img className="desctop" src={getWeatherIcon()} alt="cloud-img" />
    </>
  );
}
