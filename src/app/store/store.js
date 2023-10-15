import { configureStore } from "@reduxjs/toolkit";
import { ReservSlice } from "./reservSlice";

const store = configureStore({
    reducer: {
        reservation: ReservSlice,
    },
});

export default store;
