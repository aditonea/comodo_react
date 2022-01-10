import React, { useState } from "react";


export default function Table({
    tableData,
    index,
    clickTable,
    clearTable,
    selection
}) {

    const [flipped, setFlipped] = useState(false)
    const [reserved, setReserved] = useState(false)

    function toggleFlip(e) {
        e.stopPropagation()
        setFlipped(prevState => !prevState)
    }

    function cleanButton(e, tableNumber, available) {
        clearTable(tableNumber, available)
        toggleFlip(e)
    }

    return (
        <div
            className={`table table-${tableData.tableNo} ${flipped ? "flip" : ""}`}>

            <div className={`table__front ${!reserved && selection ? "border" : ""} ${reserved ? "taken" : "available"}`}
                onClick={() => clickTable(tableData.tableNo, setReserved)}>
                {tableData.reservedBy.name && <i class="fas options fa-ellipsis-h" onClick={toggleFlip}></i>}
                <p>{tableData.tableNo}</p>
                <p className="reservationName">{tableData.reservedBy.name}</p>
                <div className="details">
                    <p className="reservationPeople">{tableData.reservedBy.people} {tableData.reservedBy.people && <i class="fas fa-users"></i>}</p>
                    <p className="reservationCategory">{tableData.reservedBy.category}</p>
                </div>
            </div>

            <div className="table__back">
                {tableData.reservedBy.name && <i class="fas fa-times cancel" onClick={toggleFlip}></i>}
                <div className="options">
                    <p onClick={(e) => cleanButton(e, tableData.tableNo, setReserved)}>
                        <i class="fas fa-user-times"></i>
                        <span>Clear table</span>
                    </p>
                </div>
            </div>
        </div >
    )
}