import React, { useState } from 'react';
import './App.css';
import Game from './Game.js';

function App() {
    const [gameRunning, startGame] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                {!gameRunning && <button onClick={() => startGame(true)}>Play KPS </button>}
                {gameRunning && <Game />}
            </header>
        </div>
    );
}

export default App;
