import { createSlice } from "@reduxjs/toolkit";

export const ReservSlice = createSlice({
    name: "reservation",
    initialState: {
        hotelsReservation: [],
    },
    reducers: {
        addReservation: (state, { payload }) => {
            state.hotelsReservation.push(payload);
        },
    },
});

export const { addReservation } = ReservSlice.actions;
