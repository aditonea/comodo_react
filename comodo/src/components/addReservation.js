import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase"

import Notification from "./notification";

export default function AddReservation({ reservations, handleModal }) {
    const [notification, setNotification] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        people: 0,
        category: "Regular",
        mention: ""
    })

    function handleChange(e) {
        e.preventDefault()
        let data = e.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [data.name]: data.value
            }
        })
    }

    function addReservation() {
        set(ref(db, `reservations/${reservations.length}`), formData)
            .then(() => setNotification(true))
        setFormData({
            name: "",
            people: 0,
            category: "Regular",
            mention: ""
        })
    }




    return (
        <div className="container">
            <div className="modal__add">
                <i class="fas fa-times" onClick={handleModal}></i>
                <h2 className="modal-title title">Adauga rezervare</h2>
                <form>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Nume"
                        onChange={handleChange}>
                    </input>

                    <input
                        type="number"
                        name="people"
                        value={formData.people}
                        placeholder="Persoane"
                        onChange={handleChange}>
                    </input>

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}>
                        <option>Regular</option>
                        <option>VIP</option>
                        <option>Oferta</option>
                        <option>Aniversare</option>
                    </select>

                    <textarea
                        name="mention"
                        value={formData.mention}
                        placeholder="Observatii"
                        onChange={handleChange}>
                    </textarea>
                </form>
                <button onClick={addReservation}>Adauga</button>
            </div>
            {notification && <Notification text={"Rezervare adaugata cu succes!"} />}
        </div>
    )
}