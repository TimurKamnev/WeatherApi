import {WeatherCardProps} from "../Types/WeatherProps";
import {useQuery} from "@tanstack/react-query";


const api = {
    key: "8c51daf75706bc85a02f3ade841d4145",
    base: "https://api.openweathermap.org/data/2.5/",
};
const UseCountryHook = ({onWeatherUpdate}: WeatherCardProps, search: string) => useQuery({
    queryKey: ['weather'],
        queryFn: async (): Promise<WeatherCardProps[]> => {
        const response = await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`);
        const data = await response.json();
        return data;
    },
});


export default UseCountryHook;