"use client";
import { useState, useEffect, useContext } from "react";
import { CardHotel } from "../../molecules/cards/cards";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilter.module.css";
import { hotelRooms } from "@/utils/helper";
import { Alert, AlertTitle, Snackbar, alertClasses } from "@mui/material";
import { AppContext } from "@/app/store/CurrentProvider";

export const CardsFilters = ({ getDataHotels }) => {
    /*a continuacion un estado, para cuando hay que hacer una espera o algo similar para hacer una transicion mientras llega la info de la api por ejemplo*/
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedPrice, setSelectedPrice] = useState("all");
    const [selectedSizes, setSelectedSizes] = useState("all");
    const [dateFrom, setDateFrom] = useState("all");
    const [dateTo, setDateTo] = useState("all");
    const [filterHotels, setFilterHotels] = useState([]);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const { setHomePage } = useContext(AppContext);

    useEffect(() => {
        setHomePage;
    }, []);
    /*     const [hotelsData, setHotelsData] = useState([]);

    try {
        const fetchHotels = async () => {
            const data = await hotelData();
            setHotelsData(data);
        };
    } catch (error) {
        console.error("error en los HOTELES ");
    }

    useEffect(() => {
        fetchHotels();
    }, []); */

    useEffect(() => {
        const newDateFrom = new Date(dateFrom);
        const newDateFromMs = newDateFrom.getTime();
        const newDateLocalFrom = new Date(
            newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 6000
        );

        const newDateTo = new Date(dateTo);
        const newDateToMs = newDateTo.getTime();
        const newDateLocalTo = new Date(
            newDateTo.getTime() + newDateTo.getTimezoneOffset() * 6000
        );
        console.log(newDateLocalTo);
        console.log(newDateLocalFrom);

        const Today = new Date().setHours(0, 0, 0, 0);

        const filteredHotels = getDataHotels.filter((hotel) => {
            const availabilityHotels = Today + hotel.availabilityFrom;
            const availabilityDays = availabilityHotels + hotel.availabilityTo;

            const isCountryMatch =
                selectedCountry === "all" ||
                selectedCountry.toLocaleLowerCase() ===
                    hotel.country.toLocaleLowerCase();
            const isPriceMatch =
                selectedPrice === "all" ||
                selectedPrice.toString() === hotel.price.toString();
            const isSizeMatch =
                selectedSizes === "all" ||
                selectedSizes === hotelRooms(hotel.rooms);
            const availability =
                (dateFrom === "all" && dateTo === "all") ||
                (newDateToMs >= availabilityHotels && newDateFromMs) ===
                    availabilityDays;

            return (
                isCountryMatch && isPriceMatch && isSizeMatch && availability
            );
        });
        setFilterHotels(filteredHotels);
    }, [selectedCountry, selectedPrice, selectedSizes, dateFrom, dateTo]);

    /* const filterHotels = () => {
        const newDateFrom = new Date(dateFrom);
        const newDateFromMs = newDateFrom.getTime();
        const newDateLocalFrom = new Date(
            newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 6000
        );

        const newDateTo = new Date(dateTo);
        const newDateToMs = newDateTo.getTime();
        const newDateLocalTo = new Date(
            newDateTo.getTime() + newDateTo.getTimezoneOffset() * 6000
        );
        console.log(newDateLocalTo);
        console.log(newDateLocalFrom);

        const Today = new Date().setHours(0, 0, 0, 0);

        const filteredHotels = getDataHotels.filter((hotel) => {
            const availabilityHotels = Today + hotel.availabilityFrom;
            const availabilityDays = availabilityHotels + hotel.availabilityTo;

            const isCountryMatch =
                selectedCountry === "all" ||
                selectedCountry.toLocaleLowerCase() ===
                    hotel.country.toLocaleLowerCase();
            const isPriceMatch =
                selectedPrice === "all" ||
                selectedPrice.toString() === hotel.price.toString();
            const isSizeMatch =
                selectedSizes === "all" ||
                selectedSizes === hotelRooms(hotel.rooms);
            const availability =
                (dateFrom === "all" && dateTo === "all") ||
                (newDateToMs >= availabilityHotels && newDateFromMs) ===
                    availabilityDays;

            return (
                isCountryMatch && isPriceMatch && isSizeMatch && availability
            );
        });
        return filteredHotels;
    }; */

    return (
        <>
            <Header
                updateCity={setSelectedCountry}
                updatePrice={setSelectedPrice}
                updateSize={setSelectedSizes}
                changeDateFrom={setDateFrom}
                changeDateTo={setDateTo}
            />

            <div className={styles.cardsConteainer}>
                {filterHotels.length > 0 ? (
                    filterHotels.map((hotel, index) => (
                        <CardHotel
                            key={index}
                            hotel={hotel}
                            snackbar={setShowSnackbar}
                        />
                    ))
                ) : (
                    <Alert severity="info">
                        {/*                         <AlertTitle>Info<AlertTitle/>
                         */}{" "}
                        Ups mejor busquemos mas -<strong>opciones</strong>
                    </Alert>
                )}
            </div>
            <Snackbar
                open={showSnackbar}
                autoHideDuration={3500}
                onClose={setShowSnackbar}
            >
                <Alert severity="success" sx={{ width: "100%" }}>
                    lista tu reserva!
                </Alert>
            </Snackbar>
        </>
    );
};
