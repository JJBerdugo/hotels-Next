"use client";

import { CardsFilterTemplate } from "../../components/templates/cardsFilter-template/cardsFilterTemplates";
import { hotelData } from "../../services/getHotelsServices";

export default async function Home() {
    const getDataHotels = await hotelData();

    return (
        <>
            <CardsFilterTemplate getDataHotels={getDataHotels} />
        </>
    );
}
