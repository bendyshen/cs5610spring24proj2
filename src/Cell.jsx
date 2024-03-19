import React from 'react';
import './Cell.css'

export default function Cell(props){
    const maxIterations = 10;
    const iterationClamped = Math.min(props.deadIterations, maxIterations);
    const colorIntensity = (maxIterations - iterationClamped) / maxIterations;
    let heatColor = 'white';
    if (colorIntensity == 1) {
        heatColor = 'black';
    }
    else if (colorIntensity >= 0.8){
        heatColor = 'purple';
    }
    else if (colorIntensity >= 0.6){
        heatColor = 'red';
    }
    else if (colorIntensity >= 0.3){
        heatColor = 'yellow';
    }
    return (
        <div className={`cell ${props.isAlive ? 'alive' : 'dead'} ${props.heatMapMode ? heatColor:`off`}`} onClick={props.clickCell}></div>
      );
}