import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Common.css'
import './Game.css'
import Grid from './Grid';
import Control from './Control';
export default function GamePage(){
    const [height, setHeight] = useState(20);
    const [width, setWidth] = useState(20);
    const [error, setError] = useState("");
    const handleHeightChange = (event) => setHeight(event.target.value);
    const handleWidthChange = (event) => setWidth(event.target.value);
    const [grid, setGrid] = useState(() => generateGrid(height, width));
    const [livingCellsCount, setLivingCellsCount] = useState(0);
    const [heatmapMode, setHeatmapMode] = useState(false);

    useEffect(() => {
        const count = grid.flat().filter(cell => cell.isAlive).length;
        setLivingCellsCount(count);
        }, [grid]);

    const toggleHeatmapMode = () => {
        setHeatmapMode(!heatmapMode);
    };

    const updateGridSize = () => {
        if (height >= 3 && height <= 40 && width >= 3 && width <= 40) {
            setGrid(generateGrid(height, width));
            setError("");
        } else {
            setError("Height and width must be between 3 and 40!");
        }
    };

    function generateGrid(rows, cols){
        const grid = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                const randomNum = Math.random();
                row.push({isAlive : randomNum < 0.05, deadIterations : randomNum < 0.05 ? 0:1});
            }
            grid.push(row);
        }
        return grid;
    }

    function clickCell(rowIndex, cellIndex){
        const newGrid = [...grid];
        newGrid[rowIndex][cellIndex].isAlive = !newGrid[rowIndex][cellIndex].isAlive;
        setGrid(newGrid);
    }

    const resetGrid = () => {
        setGrid(generateGrid(height, width));
    };

    const progressSimulation = () => {
        const nextGridState = computeNextGridState(grid);
        setGrid(nextGridState);
    };

    const computeNextGridState = (currentGrid) => {
        const nextGridState = currentGrid.map(arr => [...arr]);
    
        for (let y = 0; y < currentGrid.length; y++) {
            for (let x = 0; x < currentGrid[y].length; x++) {
                const liveNeighbors = countLiveNeighbors(currentGrid, x, y);
    
                if (currentGrid[y][x].isAlive) {
                    if (liveNeighbors < 2 || liveNeighbors > 3) {
                        nextGridState[y][x].isAlive = false;
                        nextGridState[y][x].deadIterations = 1;
                    }
                } else {
                    if (liveNeighbors === 3) {
                        nextGridState[y][x].isAlive = true;
                        nextGridState[y][x].deadIterations = 0;
                    }
                    else {
                        nextGridState[y][x].deadIterations ++;
                    }
                }
            }
        }
    
        return nextGridState;
    };
    
    const countLiveNeighbors = (grid, x, y) => {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                const newX = x + j;
                const newY = y + i;
                if (newX >= 0 && newX < grid[0].length && newY >= 0 && newY < grid.length && grid[newY][newX].isAlive) {
                    count ++;
                }
            }
        }
        return count;
    };

    return (
        <>
            <div class="navbar-container">
                <div class="navbar-element ">
                    <Link to="/" >Home</Link>
                </div>
                <div class="navbar-element">
                    <Link to="/game">Game</Link>
                </div>
                <div class="navbar-element">
                    <Link to="/credits">Credits</Link>
                </div>
            </div>
            <div className="game-page">
            <div className="living-cells-count">
                <span style={{fontWeight:'bold', fontSize:'20px'}}>Currently Living Cells:</span> {livingCellsCount}
            </div>
                <div className="grid-input">
                    <div>
                        <label for="height">Height (between 3 and 40):</label>
                        <input type='number' id='height' value={height} onChange={handleHeightChange}></input>
                    </div>
                    <div>
                        <label for="width">Width (between 3 and 40):</label>
                        <input type='number' id='width' value={width} onChange={handleWidthChange}></input>
                    </div>
                    <div>
                        <button onClick={updateGridSize}>set</button>
                    </div>
                </div>
                <div className="error-message">
                    {error && <div>{error}</div>}
                </div>
                <Grid grid={grid} clickCell={clickCell} heatMapMode={heatmapMode} toggleHeatmapMode={toggleHeatmapMode}/>
                <Control heatMapMode={heatmapMode} toggleHeatmapMode={toggleHeatmapMode} resetGrid={resetGrid} progressSimulation={progressSimulation}/>
            </div>
        </>
    )
}