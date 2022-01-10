import React, { useState } from "react";
import { getDatabase, ref, remove } from "firebase/database";
import { auth } from "../firebase";
import EditReservation from "./editReservation";

export default function Reservation({
    reservation,
    index,
    clickReservation,
    handleHide,
    handleNotification
}) {

    const [edit, setEdit] = useState(false)
    const admin = auth.currentUser.email === "admin@comodo.app"

    function deleteReservation(index) {
        const db = getDatabase()
        remove(ref(db, `reservations/${index}`))
    }

    function handleEdit() {
        setEdit(prevState => !prevState)
    }

    function handleAssign(index) {
        clickReservation(index)
        handleHide()
    }

    return (
        <div className="reservation__card">
            {edit ? <EditReservation handleEdit={handleEdit} reservation={reservation} index={index} setNotification={handleNotification} /> :
                <>
                    <div className="reservation__card-details">
                        <span className="name">{reservation.name}</span>
                        <span>{reservation.category}</span>
                    </div>

                    {admin && <>
                        <div className="reservation__card-actions">
                            <i class="fas fa-map-marker" onClick={() => handleAssign(reservation.id - 1)}></i>
                            <i class="fas fa-user-edit" onClick={handleEdit}></i>
                            <i class="fas fa-trash" onClick={() => deleteReservation(index)}></i>
                        </div>
                    </>}

                    <div className="reservation__card-people">
                        <i class="fas fa-users"></i><span>{reservation.people}</span>
                    </div>

                </>
            }
        </div>)
}