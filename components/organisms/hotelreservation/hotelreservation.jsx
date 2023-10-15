"use client";
import { CardHotel } from "../../molecules/cards/cards";
import { useSelector } from "react-redux";

export const HotelsReservation = () => {
    const listHotelsReservation = useSelector(
        (state) => state.reservation.hotelsReservation
    );
    return (
        <div>
            {listHotelsReservation.map((hotel, index) => (
                <CardHotel key={index} hotel={hotel} />
            ))}
        </div>
    );
};
