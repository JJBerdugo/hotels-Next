import { createSlice } from "@reduxjs/toolkit";

export const ReservSlice = createSlice({
    name: "reservation",
    initialState: {
        hotelReservation: [],
    },
    reducers: {
        addReservation: (state, payload) => {
            state.hotelReservation.push(payload);
        },
    },
});

export const { addReservation } = ReservSlice.actions;
