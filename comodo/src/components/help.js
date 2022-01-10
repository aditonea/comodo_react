import React, { useState } from "react";


export default function Help({ clickHelp }) {
    const [progress, setProgress] = useState(1)
    const cards = [
        {
            image: "welcome",
            title: "Bine ai venit!",
            text: "Comodo este o platforma online de gestiune a rezervarilor din locatia ta sincronizata la baza de date"
        },
        {
            image: "reservations",
            title: "Gesiune in timp real",
            text: "Incarca lista de rezervari, selecteaza rezervarea si apoi doar selecteaza pozitia unde doresti sa fie amplasata"
        },
        {
            image: "analytics",
            title: "Grafice",
            text: "Modulul de date analitice te ajuta sa monitorizezi diferentele de rezervari in functie de zile (in dezvoltare) si situatia rezervarilor in functie de tipul acestora"
        },
        {
            image: "settings",
            title: "In curand",
            text: "Platforma este inca in stadiu de dezvoltare, dar pregatim o multime de functionalitati noi"
        }
    ]

    function handleClick() {
        if (progress < 4) {
            setProgress(prevState => prevState + 1)
        } else {
            clickHelp()
        }
    }

    return (
        <div className="container">
            <div className="modal__help">
                <img src={`./images/help/${cards[progress - 1].image}.svg`} alt="" />
                <div className="modal__help-info">
                    <h2 className="title">{cards[progress - 1].title}</h2>
                    <p>{cards[progress - 1].text}</p>
                </div>
                <div className="modal__help-progress">
                    <div className="line" style={{ width: `${25 * progress}%` }} />
                </div>
                <button onClick={handleClick}>{progress < 4 ? "Urmatorul" : "Gata"}</button>
            </div>
        </div >
    )
}