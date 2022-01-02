import React from "react";
import Tooltip from "./tooltip"

export default function Reservation({ user, clickReservation }) {


    return (
        <div
            className="reservation"
            data-id={user.id}>
            <div className="user-details"><span className="reservation--name">{user.name}</span> <span>{user.category}</span></div>
            <div className="user-people"><i class="fas fa-users"></i><span>{user.people}</span></div>
            {user.mention ? <Tooltip text={user.mention}><i class="fas fa-comment-alt"></i></Tooltip> : null}
            <div className="user-actions">
                <i class="fas fa-map-marker" onClick={() => clickReservation(user.id)}></i>
                <i class="fas fa-user-edit"></i>
                <i class="fas fa-trash"></i>
            </div>
        </div>)
}