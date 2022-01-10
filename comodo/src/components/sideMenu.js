import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import Tooltip from "./tooltip";

export default function SideMenu({
    reservations,
    handleAdd,
    handleHelp,
    handleAnalytics
}) {

    const navigate = useNavigate()
    const admin = auth.currentUser.email === "admin@comodo.app"

    function logout() {
        signOut(auth)
            .then(() => alert("Signed out"))
            .then(() => navigate("/"))
    }

    return (
        <div className="menu">
            <div className="menu__user">
                <i class="fas fa-user-circle"></i>
                <span>{admin ? "Admin" : "Guest"}</span>
            </div>


            <div className="menu__actions">
                {admin && <>

                    <Tooltip text={"Adauga rezervare"}>
                        <i class="fas fa-user-plus hover" onClick={handleAdd}></i>
                    </Tooltip>

                    <Tooltip text={"Grafice"}>
                        <i class="far fa-chart-bar hover" onClick={handleAnalytics}></i>
                    </Tooltip>

                </>}
            </div>


            <div className="menu__stats">
                <div className="menu__stats-stat">
                    <i class="fas fa-users"></i>
                    <span>
                        {
                            reservations.reduce((acc, value) => (acc + parseInt(value.people)), 0)
                        }
                    </span>
                </div>

                <div className="menu__stats-stat">
                    <i class="far fa-calendar-alt"></i>
                    <span>
                        {
                            reservations.length
                        }
                    </span>
                </div>
            </div>

            <Tooltip text={"Sfaturi"}>
                <i class="far fa-question-circle hover" onClick={handleHelp}></i>
            </Tooltip>

            <Tooltip text={"Deconectare"}>
                <i class="fas fa-sign-out-alt hover" onClick={logout}></i>
            </Tooltip>

        </div>
    )
}