import React from "react";
import PieChart from "./pieChart";




export default function Analytics({ reservations, handleModal }) {

    return (
        <div className="container">
            <div className="modal__analytics">
                <i class="fas fa-times" onClick={handleModal}></i>
                <h2 className="title">Grafice</h2>
                <div className="modal__analytics-chart">
                    <PieChart reservations={reservations} />
                </div>
            </div>
        </div>

    )
}