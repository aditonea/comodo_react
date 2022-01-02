import React, { useState, useEffect } from "react";
import SideMenu from "../components/sideMenu";
import TablePlan from "../components/tablePlan";
import ReservationList from "../components/reservationList";
import AddReservation from "../components/addReservation";
import Help from "../components/help";
import Analytics from "../components/analytics";
import Settings from "../components/settings"
import { userData } from "../userData";
import { tableData } from "../tableData";

export default function Dashboard({ signOut }) {
    const [tables, setTables] = useState(tableData)
    const [selection, setSelection] = useState(false)
    const [displayAdd, setDisplayAdd] = useState(false)
    const [displayHelp, setDisplayHelp] = useState(false)
    const [displayAnalytics, setDisplayAnalytics] = useState(false)
    const [displaySettings, setDisplaySettings] = useState(false)

    let selectedReservation;

    function reservationID(id) {
        setSelection(true)
        const [filtered] = userData.filter(user => {
            return user.id == id
        })
        selectedReservation = filtered
    }

    function selectTable(idx, selected = selectedReservation) {
        if (selected) {
            let updateTables = tables.slice()
            updateTables[idx].reservedBy = selected
            setTables(updateTables)
            setSelection(false)
            // } else {
            //     alert("Please select a reservation")
        }
    }

    function toggleAdd() {
        setDisplayAdd(prevState => !prevState)
    }

    function toggleHelp() {
        setDisplayHelp(prevState => !prevState)
    }

    function toggleAnalytics() {
        setDisplayAnalytics(prevState => !prevState)
    }

    function toggleSettings() {
        setDisplaySettings(prevState => !prevState)
    }





    return (
        <div id="control">
            <SideMenu handleAdd={toggleAdd} handleHelp={toggleHelp} handleAnalytics={toggleAnalytics} handleSettings={toggleSettings} signOut={signOut} />
            <ReservationList clickReservation={reservationID} />
            <TablePlan clickTable={selectTable} tables={tables} selection={selection} />
            {[displayAdd, displayHelp, displayAnalytics, displaySettings].includes(true) && <div className="screen"></div>}
            {displayAdd && <AddReservation handleModal={toggleAdd} />}
            {displayHelp && <Help clickHelp={toggleHelp} />}
            {displayAnalytics && <Analytics handleModal={toggleAnalytics} />}
            {displaySettings && <Settings handleModal={toggleSettings} />}
        </div>

    )
}