import React from 'react';
import './Common.css'
import './Credits.css'
import { Link } from 'react-router-dom';
export default function CreditsPage(){
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
            <div className='container'>
                <div className="title">
                    Credits
                </div>
                <div className="name">
                    <span>Author:</span> Yuan Shen
                </div>
                <div className="github">
                    <a href="https://github.com/bendyshen/cs5610spring24proj2.git" target="_blank">Github</a>
                </div>
            </div>
        </>
    )
}