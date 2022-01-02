import React, { useState, useEffect } from "react";
import { userData } from "../userData";
import Tooltip from "./tooltip";

export default function SideMenu({ handleAdd, handleHelp, handleAnalytics, handleSettings, signOut }) {

    return (
        <div className="menu">
            <div className="stat">
                <i class="fas fa-user-circle"></i>
                <span>Admin</span>
            </div>


            <div className="menu--actions">
                <Tooltip text={"Add reservation"}>
                    <i class="fas fa-user-plus hover" onClick={handleAdd}></i>
                </Tooltip>
                <Tooltip text={"Analytics"}>
                    <i class="far fa-chart-bar hover" onClick={handleAnalytics}></i>
                </Tooltip>
                <Tooltip text={"Settings"}>
                    <i class="fas fa-cog hover" onClick={handleSettings}></i>
                </Tooltip>
            </div>


            <div className="menu--stats">
                <div className="stat">
                    <i class="fas fa-users"></i>
                    <span>
                        {
                            userData.reduce((acc, value) => (acc + value.people), 0)
                        }
                    </span></div>

                <div className="stat">
                    <i class="far fa-calendar-alt"></i>
                    <span>
                        {
                            userData.length
                        }
                    </span>
                </div>

            </div>
            <Tooltip text={"Help"}>
                <i class="far fa-question-circle hover" onClick={handleHelp}></i>
            </Tooltip>

            <Tooltip text={"Sign out"}>
                <i class="fas fa-sign-out-alt hover" data-log="signOut" onClick={signOut}></i>
            </Tooltip>

        </div>
    )
}