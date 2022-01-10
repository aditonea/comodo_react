import React from "react";

export default function Loading() {


    return (
        <div className="loading__container">
            <div className="loading__container-box">
                <div className="loading">
                    <div className="loading-dot" />
                    <div className="loading-dot" />
                    <div className="loading-dot" />
                </div>
                <p>Loading...</p>
            </div>
        </div>
    )
}