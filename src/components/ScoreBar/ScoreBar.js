import React from "react";
import "./ScoreBar.css"

const ScoreBar = (props) => (
    <div className="scoreBar text-center">
        <h3>Score: {props.score}</h3>
    </div>
);

export default ScoreBar;