import React, { useState } from "react";


export default function Table({ table, clickTable, selection, index }) {
    const [flipped, setFlipped] = useState(false)

    function handleFlip() {
        setFlipped(true)
    }


    return (
        <div
            // className={`table ${selection ? "border" : ""} table-${table.tableNo} ${table.reservedBy.name ? "taken" : ""}`}
            className={`table table-${table.tableNo} ${flipped ? "flip" : ""}`}
            onClick={() => clickTable(index)}>
            <div className="front">
                <i class="fas fa-ellipsis-h" onClick={handleFlip}></i>
                <p>{table.tableNo}</p>
                <p className="reservationName">{table.reservedBy.name}</p>
                <div className="details">
                    <p className="reservationPeople">{table.reservedBy.people}</p>
                    <p className="reservationCategory">{table.reservedBy.category}</p>
                    <p className="reservationCategory">{table.reservedBy.mention}</p>
                </div>
            </div>
            <div className="back">
                <p><i class="fas fa-random"></i> Switch tables</p>
                <p><i class="fas fa-user-times"></i> Clear table</p>
                <p><i class="fas fa-comment-alt"></i> Mention</p>
            </div>
        </div>
    )
}