import React, { useState } from "react";

export default function AddReservation({ handleModal }) {
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

    console.log(formData)


    return (
        <div className="container">
            <div className="modal--add">
                <i class="fas fa-times" onClick={handleModal}></i>
                <h2 className="modal-title">Add reservation</h2>
                <form>
                    <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange}></input>
                    <input type="number" name="people" value={formData.people} placeholder="People" onChange={handleChange}></input>
                    <select name="category" value={formData.category} onChange={handleChange}>
                        <option>Regular</option>
                        <option>VIP</option>
                        <option>Offer</option>
                        <option>Anniversary</option>
                    </select>
                    <textarea name="mention" value={formData.mention} placeholder="Mention" onChange={handleChange}></textarea>

                    {/* Layout cu doua butoane in partea de jos: Cancel / Add */}
                    {/* <button className="cancel" onClick={handleModal}>Cancel</button>
                    <button className="add">Add</button> */}
                </form>
                <button>Add</button>
            </div>
        </div>
    )
}