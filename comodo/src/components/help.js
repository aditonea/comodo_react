import React, { useState } from "react";


export default function Help({ clickHelp }) {
    const [progress, setProgress] = useState(1)
    const cards = [
        {
            image: "welcome",
            title: "Welcome",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit ante. Donec non tincidunt ipsum. - 1"
        },
        {
            image: "reservations",
            title: "Reservations",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit ante. Donec non tincidunt ipsum. - 2"
        },
        {
            image: "analytics",
            title: "Analytics",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit ante. Donec non tincidunt ipsum. - 3"
        },
        {
            image: "settings",
            title: "Settings",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit ante. Donec non tincidunt ipsum. - 4"
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
            <div className="modal--help">
                <img src={`./images/help/${cards[progress - 1].image}.svg`} alt="" />
                <div className="modal--help-info">
                    <h2>{cards[progress - 1].title}</h2>
                    <p>{cards[progress - 1].text}</p>
                </div>
                <div className="progress-bar">
                    <div className="line" style={{ width: `${25 * progress}%` }} />
                </div>
                <button onClick={handleClick}>{progress < 4 ? "Next" : "Finish"}</button>
            </div>
        </div >
    )
}