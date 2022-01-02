import React, { useState, useEffect } from "react";
import Reservation from "./reservation";
import { userData } from "../userData"




export default function ReservationList({ clickReservation }) {
    const [search, setSearch] = useState("")
    const [toggle, setToggle] = useState(true)

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function handleToggle() {
        setToggle(prevState => !prevState)
    }



    return (
        <div className={`reservation--menu ${toggle ? "hide" : ""}`}>
            <div className="search">
                <form>
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search reservation"></input>
                </form>
            </div>


            <div className="reservation--list">
                {(search ? userData.filter(user => user.name.toLowerCase().includes(search)) : userData).map(user =>
                    <Reservation key={user.id} user={user} clickReservation={clickReservation} />
                )}
            </div>

            <div className="dot" onClick={handleToggle}><i class={`fas fa-chevron-${toggle ? "left" : "right"}`}></i></div>
        </div>


    )
}