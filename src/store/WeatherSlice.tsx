import { createSlice } from "@reduxjs/toolkit";

interface PropsType {
    state: {
        weather: {
            data: string;
        }
    }
}
export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: null,
    },
    reducers: {
        setWeather: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setWeather } = weatherSlice.actions;

export const selectWeather = ({state}: PropsType) => state.weather.data;

export default weatherSlice.reducer;