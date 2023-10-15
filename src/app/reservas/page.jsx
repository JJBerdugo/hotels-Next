const {
    default: ReservationTemplate,
} = require("../../../components/templates/cardsFilter-template/reservation-template/reservationTemplate");

const Reservation = () => {
    return (
        <div>
            <h2>Bienvenido! le esperabamos para reservar</h2>
            <ReservationTemplate />
        </div>
    );
};
