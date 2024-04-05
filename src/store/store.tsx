import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import {RootState} from "./types";

// Типы
interface WeatherData {
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
    day: string;
    weatherIcon: string;
}

interface WeatherState {
    data: WeatherData | null;
}

// Начальное состояние
const initialState: WeatherState = {
    data: null,
};

// Действия
export const setWeather = createAction<WeatherData | null>("weather/setWeather");

// Редюсер
export const weatherReducer = createReducer(initialState, (builder) => {
    builder.addCase(setWeather, (state, action) => {
        state.data = action.payload;
    });
});

// Создание хранилища
export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
});

// Типизированный хук для useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;