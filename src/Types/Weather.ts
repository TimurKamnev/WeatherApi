export interface Weather {
  weather: {
    main: string;
  }[];
  main: {
    temp: number;
    feels_like: string;
  };
  wind: {
    speed: string;
  };
  clouds: {
    all: string;
  };
  coord: {
    lat: string;
  };
}
