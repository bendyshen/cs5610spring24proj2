import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';
import './Home.css'

export default function HomePage(){
  return (
    <>
        <div class="navbar-container">
            <div className="navbar-element ">
                <Link to="/" >Home</Link>
            </div>
            <div className="navbar-element">
                <Link to="/game">Game</Link>
            </div>
            <div className="navbar-element">
                <Link to="/credits">Credits</Link>
            </div>
        </div>

        <div className="home-page">
        <h1>Welcome to Conway's Game of Life</h1>
        <p>Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It's a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.</p>
        
        <h2>Rules</h2>
        <ul>
            <li>A living cell with less than two live neighbours dies (as if by underpopulation).</li>
            <li>A living cell with two or three live neighbours lives on to the next generation.</li>
            <li>A living cell with more than three live neighbours dies (as if by overpopulation).</li>
            <li>A dead cell with exactly three live neighbours becomes a live cell (as if by reproduction).</li>
        </ul>
        <h2>Game Setup</h2>
        <ul>
            <li>The game is 20x20 grid by default, but you can change the dimension on your own (range from 3 to 40).</li>
            <li>You can click any cell and reverse its state.</li>
            <li>There is a button that you can click to turn on the heatmap indicating how recently a grid was alive.</li>
        </ul>
        <p>Click 'Game' on the top and explore the game!</p>
        </div>
    </>
  );
}
