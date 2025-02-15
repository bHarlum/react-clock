import React from "react";
import "./Clock.css";

const Clock = (props) => {
    const seconds = props.date.getSeconds();
    const minutes = props.date.getMinutes();
    const hours = props.date.getHours();
    
    return (
        <div className="container">
            <h3 className="label">{props.timezone}</h3>
            <div className="clock-face" style={{ backgroundImage: `url(${props.icon})` }}>
                <div className="clock">
                    <div className="hours-container">
                        <div className="hours" style={{ transform: `rotateZ(${(hours * 30) + (minutes / 2)}deg)`}}></div>
                    </div>
                    <div className="minutes-container">
                        <div className="minutes" style={{ transform: `rotateZ(${(minutes * 6)}deg)`}}></div>
                    </div>
                    <div className="seconds-container">
                        <div className="seconds" style={{ transform: `rotateZ(${(seconds * 6)}deg)`}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clock;