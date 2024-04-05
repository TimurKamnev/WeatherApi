import { useEffect, useState } from "react";
import { Weather } from "../../Types/Weather";
import { WeatherCardProps } from "../../Types/WeatherProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/types";

export default function WeatherBody({
  onWeatherUpdate,
}: WeatherCardProps) {
  // const [weather, setWeather] = useState<Weather | null>(weathertate);

  const weather = useSelector((state: RootState) => state.weather.data);

  const getButtonColor = () => {
    if (weather?.weather && weather.weather[0]) {
      const weatherType = weather.weather[0].main.toLocaleLowerCase();
      if (
        weatherType === "rain" ||
        weatherType === "mist" ||
        weatherType === "drizzle" ||
        weatherType === "smoke"
      ) {
        return "rain-color";
      } else if (weatherType === "snow") {
        return "snow-color";
      }
      return "default-color";
    }
  };

  useEffect(() => {
    onWeatherUpdate(weather!);
  }, [weather, onWeatherUpdate]);

  return (
    <>
      <aside className="weather-left">
        <div className="weather-left-content">
          <img src="./logo-fake.svg" alt="logo-icon" />
          <ul>
            <li>
              <img src="./cloud-image.svg" alt="cloud-icon" />
              weather
            </li>
            <li>
              <img src="./explore.svg" alt="explore-icon" />
              explore
            </li>
            <li>
              <img src="./location.svg" alt="location-icon" />
              cities
            </li>
            <li>
              <img src="./settings.svg" alt="settings-icon" />
              settings
            </li>
          </ul>
        </div>
      </aside>
      <div className="weather-main">
        <div className="weather-bottom">
          <div className="weather-bottom-text">
            <img src="./clock.svg" alt="clock-icon" />
            <p>24-hour forecast</p>
          </div>
            <div className="button-lack">
            <button className={`default-color ${getButtonColor()}`}>
              5-day forecast
            </button>
          </div>
        </div>
        <div className="graph">Graph</div>
      </div>
      <aside className="weather-right">
        <div className="weather-swiper">
          <div className="swiper-container">
            <Swiper
              effect={"coverflow"}
              slidesPerView={5}
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={3}
              loop={true}
              navigation
              modules={[Navigation, Scrollbar, A11y]}
            >
              <SwiperSlide>
                <span>
                  MON
                  <img src="./first-cloud.svg" alt="cloud-icons" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span>
                  TUES
                  <img src="./second-cloud.svg" alt="cloud-icons" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span>
                  WED
                  <img src="./third-cloud.svg" alt="cloud-icons" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span>
                  THU
                  <img src="./fifth-cloud.svg" alt="cloud-icons" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span>
                  FRI
                  <img src="./fourth-cloud.svg" alt="cloud-icons" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span>
                  SAT
                  <img src="./second-cloud.svg" alt="cloud-icons" />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span>
                  SUN
                  <img src="./first-cloud.svg" alt="cloud-icons" />
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="weather-text">
            <img src="./clock.svg" alt="clock-icon" />
            <p>8:00PM GMT</p>
          </div>
        </div>
        <div className="weather-description">
          <h5>AIR CONDITIONS</h5>
          {weather ? (
            <>
              <ul>
                <li>
                  <img src="./termometer.svg" alt="condition-icons" />
                  <span>
                    Real Feel
                    <br />
                    <strong>{weather.main.feels_like}°</strong>
                  </span>
                </li>
                <li>
                  <img src="./wind.svg" alt="condition-icons" />
                  <span>
                    Wind
                    <br />
                    <strong>{weather.wind.speed} km/hr</strong>
                  </span>
                </li>
                <li>
                  <img src="./drop.svg" alt="condition-icons" />
                  <span>
                    Chance of rain
                    <br />
                    <strong>{weather.clouds.all}%</strong>
                  </span>
                </li>
                <li>
                  <img src="./sun.svg" alt="condition-icons" />
                  <span>
                    UV Index
                    <br />
                    <strong>{weather.coord.lat}</strong>
                  </span>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul>
                <li>
                  <img src="./termometer.svg" alt="condition-icons" />
                  <span>
                    Real Feel
                    <br />
                    <strong>0°</strong>
                  </span>
                </li>
                <li>
                  <img src="./wind.svg" alt="condition-icons" />
                  <span>
                    Wind
                    <br />
                    <strong>0.0 km/hr</strong>
                  </span>
                </li>
                <li>
                  <img src="./drop.svg" alt="condition-icons" />
                  <span>
                    Chance of rain
                    <br />
                    <strong>0 %</strong>
                  </span>
                </li>
                <li>
                  <img src="./sun.svg" alt="condition-icons" />
                  <span>
                    UV Index
                    <br />
                    <strong>0</strong>
                  </span>
                </li>
              </ul>
            </>
          )}
        </div>
        <img
          className="background-image"
          src="./background.svg"
          alt="background-img"
        />
      </aside>
    </>
  );
}
