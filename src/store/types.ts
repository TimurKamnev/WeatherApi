import { combineReducers } from "redux";
import { weatherReducer } from "./store";

// Корневой стейт
export type RootState = ReturnType<typeof rootReducer>;

// Корневой редюсер
export const rootReducer = combineReducers({
    weather: weatherReducer,
});