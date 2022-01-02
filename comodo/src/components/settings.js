import React, { useState } from "react";


export default function Settings({ handleModal }) {
    const [tableColors, setColors] = useState({
        available: "#f7da38",
        taken: "#9A9A9A",
    })

    function handleColor(e) {
        let data = e.target
        setColors(prevState => {
            return {
                ...prevState,
                [data.name]: data.value
            }
        })
    }

    console.log(tableColors)


    return (
        <div className="container">
            <div className="modal--settings">
                <i class="fas fa-times close" onClick={handleModal}></i>
                <h2 className="modal-title">Settings</h2>
                <form>
                    <label>
                        Change color for available table:
                        <input type="color" name="available" value={tableColors.available} onChange={handleColor} />
                    </label>
                    <label>
                        Change color for taken table:
                        <input type="color" name="taken" value={tableColors.taken} onChange={handleColor} />
                    </label>
                </form>
                <div className="password">
                    <p>Change password</p>
                    <p>Restore settings</p>
                </div>
                <div className="buttons">
                    <button><i class="fas fa-user-times"></i> Clear day</button>
                    <button> Apply</button>
                    <button><i class="far fa-calendar-plus"></i> New day</button>
                </div>
            </div>
        </div>
    )
}