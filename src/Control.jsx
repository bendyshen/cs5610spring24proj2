import React from "react";
import './Control.css'
export default function Control(props){
    return (
        <>
        <div class="control">
            <button id="reset" onClick={props.resetGrid}>Reset Grid</button>
            <button id="next" onClick={props.progressSimulation}>Next Step</button>
        </div>
        </>
    )
}