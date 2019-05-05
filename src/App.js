import React, { useState } from 'react';
import './App.css';
import Game from './Game.js';
import Grow from '@material-ui/core/Collapse';

function App() {
    const [gameRunning, startGame] = useState(false);
    return (
        <div className="App">
            <h1>KPS</h1>
            <Grow in={!gameRunning}>
                <button onClick={() => startGame(true)}>Play KPS </button>
            </Grow>
            <Grow in={gameRunning}>
                <Game />
            </Grow>
        </div>
    );
}

export default App;
