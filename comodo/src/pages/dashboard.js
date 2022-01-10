import React, { useState, useEffect } from "react";

//Utils
import { ref, onValue, update } from "firebase/database"
import { db } from "../firebase"

//Components
import SideMenu from "../components/sideMenu";
import TablePlan from "../components/tablePlan";
import ReservationList from "../components/reservationList";
import AddReservation from "../components/addReservation";
import Help from "../components/help";
import Analytics from "../components/analytics";
import Loading from "../components/loading";
import Notification from "../components/notification";

export default function Dashboard() {
    const [database, setDatabase] = useState(null)
    const [selection, setSelection] = useState(null)
    const [displayAdd, setDisplayAdd] = useState(false)
    const [displayHelp, setDisplayHelp] = useState(false)
    const [displayAnalytics, setDisplayAnalytics] = useState(false)

    const [editNotification, setEditNotification] = useState(false)

    //Fetch data from database for tables & reservations
    useEffect(() => {
        const databaseRef = ref(db);
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val()
            setDatabase(data)
        })
    }, [])

    function selectReservation(idx) {
        const selectionRef = ref(db, `reservations/${idx}`);
        onValue(selectionRef, (snapshot) => {
            const data = snapshot.val();
            setSelection(data)
        });
    }

    function selectTable(number, taken) {
        if (selection) {
            update(ref(db, `tables/${number - 1}`), {
                tableNo: number,
                reservedBy: selection
            })
            setSelection("")
            taken(true)
        } else {
            alert("Please select a reservation first!")
        }
    }

    function clearTable(number, available) {
        update(ref(db, `tables/${number - 1}`), {
            tableNo: number,
            reservedBy: {
                name: "",
                people: "",
                category: ""
            }
        })
            .then(() => available())
    }


    function toggleAdd() {
        setDisplayAdd(prevState => !prevState)
        setDisplayHelp(false)
        setDisplayAnalytics(false)
    }

    function toggleHelp() {
        setDisplayHelp(prevState => !prevState)
        setDisplayAdd(false)
        setDisplayAnalytics(false)
    }

    function toggleAnalytics() {
        setDisplayAnalytics(prevState => !prevState)
        setDisplayAdd(false)
        setDisplayHelp(false)
    }

    return (
        database ?
            <div id="dashboard">
                <SideMenu
                    handleAdd={toggleAdd}
                    handleHelp={toggleHelp}
                    handleAnalytics={toggleAnalytics}
                    reservations={database.reservations}
                />

                <ReservationList
                    reservations={database.reservations}
                    clickReservation={selectReservation}
                    handleNotification={setEditNotification}
                />

                <TablePlan
                    tables={database.tables}
                    selection={selection}
                    clickTable={selectTable}
                    clearTable={clearTable}
                />

                {[displayAdd, displayHelp, displayAnalytics].includes(true) && <div className="screen"></div>}

                {displayAdd &&
                    <AddReservation
                        handleModal={toggleAdd}
                        reservations={database.reservations}
                    />}

                {displayHelp &&
                    <Help clickHelp={toggleHelp} />}

                {displayAnalytics &&
                    <Analytics
                        reservations={database.reservations}
                        handleModal={toggleAnalytics}
                    />}

                {editNotification && <Notification text={"Rezervare editata cu succes!"} />}
            </div>
            : <Loading />

    )
}