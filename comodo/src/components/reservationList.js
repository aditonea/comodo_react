import React, { useState } from "react";
import Reservation from "./reservation";



export default function ReservationList({
    reservations,
    clickReservation,
    handleNotification
}) {

    const [search, setSearch] = useState("")
    const [toggle, setToggle] = useState(true)


    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function handleHide() {
        setToggle(prevState => !prevState)
    }

    return (
        <div className={`reservations ${toggle ? "hide" : ""}`}>
            <div className="reservations__search">
                <form>
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Cauta rezervare"></input>
                </form>
            </div>

            <div className="reservations__list">
                {
                    (search ? reservations.filter(user => user.name.toLowerCase().includes(search)) : reservations).map((reservation, index) =>
                        <Reservation
                            key={reservation.id}
                            index={index}
                            reservation={reservation}
                            clickReservation={clickReservation}
                            handleHide={handleHide}
                            handleNotification={handleNotification} />
                    )
                }
            </div>

            <div className="dot" onClick={handleHide}>
                <i class={`fas fa-chevron-${toggle ? "left" : "right"}`}></i>
            </div>
        </div>


    )
}