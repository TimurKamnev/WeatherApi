import { Weather } from "./Weather";

export interface WeatherCardProps {
  weatherState: Weather | null;
  onWeatherUpdate: (weather: Weather) => void;
}
