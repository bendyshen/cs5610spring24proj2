import React, {useState} from 'react';
import './Grid.css'
import Cell from './Cell';
export default function Grid(props) {
    return (
        <>
        <div className='grid-container'>
            <div className="grid">
            {props.grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                {row.map((cell, cellIndex) => (
                    <Cell key={cellIndex} isAlive={cell.isAlive} deadIterations={cell.deadIterations} clickCell={() => props.clickCell(rowIndex, cellIndex)} heatMapMode = {props.heatMapMode}/>
                ))}
                </div>
            ))}
            </div>
            <div className='heatmap'>
                <button className="heatmap-button" id={`${props.heatMapMode ? 'on' : 'off'}`} onClick={props.toggleHeatmapMode}>
                </button>
                <span style={{fontSize:'10px'}}><br></br>Heatmap Mode</span>
            </div>
        </div>
        </>
      );
}