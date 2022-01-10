import React, { useState } from "react"
import { ref, update } from "firebase/database"
import { db } from "../firebase"

export default function EditReservation({
    index,
    reservation,
    handleEdit,
    setNotification
}) {

    const [editData, setEditData] = useState({
        id: reservation.id,
        name: reservation.name,
        category: reservation.category,
        people: reservation.people
    })

    function handleChange(e) {
        const data = e.target
        setEditData(prevState => ({ ...prevState, [data.name]: data.value }))
    }

    function submitEdit(index) {
        update(ref(db, `reservations/${index}`), editData)
            .then(() => setNotification(true))
        handleEdit()

    }

    return (
        <>
            <div className="reservation-edit">
                <form>
                    <div className="user-details">
                        <input
                            className="reservation--name"
                            type="text"
                            name="name"
                            value={editData.name}
                            onChange={handleChange}>
                        </input>
                        <select
                            value={editData.category}
                            name="category"
                            onChange={handleChange}>

                            <option value="Regular">Regular</option>
                            <option value="VIP">VIP</option>
                            <option value="Offer">Oferta</option>
                            <option value="Anniversary">Aniversare</option>
                        </select>
                    </div>

                    <div className="user-people">
                        <i class="fas fa-users"></i>
                        <input
                            type="number"
                            name="people"
                            value={editData.people}
                            onChange={handleChange}>
                        </input>
                    </div>
                    <div className="user-actions">
                        <i class="fas fa-times" onClick={handleEdit}></i>
                        <i class="fas fa-check" onClick={() => submitEdit(index)}></i>
                    </div>
                </form>
            </div>
        </>
    )
}