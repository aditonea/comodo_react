import React, { useState } from "react";
import PieChart from "./barChart";




export default function Analytics({ handleModal }) {

    return (
        <>
            <div className="container">
                <div className="modal--analytics">
                    <i class="fas fa-times" onClick={handleModal}></i>
                    <h2>Analytics</h2>
                    <div className="modal--analytics-menu">
                        <div className="buttons">
                            <button>Day</button>
                            <button>Month</button>
                            <button>Year</button>
                        </div>
                        <input type="date"></input>
                    </div>
                    <div className="modal--analytics-data">
                        <div className="analytics-chart">
                            <PieChart />
                        </div>
                        <div className="analytics-stats">
                            <div className="infos" />
                            <div className="infos" />
                            <div className="infos">
                                <i class="fas fa-calendar-times"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}