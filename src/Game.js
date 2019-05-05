import React, { useState, useEffect } from 'react';
import Grow from '@material-ui/core/Collapse';

export default function Game() {
    const [displayResult, setDisplayResult] = useState(false);
    const [selection, setSelection] = useState('');
    const [gameResult, setResult] = useState(null);

    useEffect(() => {
        const sendMove = async () => {
            setDisplayResult(false)
            const result = await fetch(
                `http://localhost:4000/kps?select=${selection}`,
            ).then(res => res.json());

            switch (selection) {
                case 'paper':
                    if (result === 0) {
                        return setResult('Even! Computer chose paper.')
                    } else if (result === 1) {
                        return setResult('You won! Computer chose stone.')
                    } else if (result === 2) {
                        return setResult('You lost! Computer chose scissors.')
                    }
                    break;
                case 'stone':
                    if (result === 0) {
                        return setResult('You lost! Computer chose paper.')
                    } else if (result === 1) {
                        return setResult('Even! Computer chose stone.')
                    } else if (result === 2) {
                        return setResult('You won! Computer chose scissors.')
                    }
                    break;
                case 'scissors':
                    if (result === 0) {
                        return setResult('You won! Computer chose paper.')
                    } else if (result === 1) {
                        return setResult('You lost! Computer chose stone.')
                    } else if (result === 2) {
                        return setResult('Even! Computer chose scissors')
                    }
                    break;
                default:
                    return
            }
            //setData(result.data);
        }
        if (selection) {
            sendMove();
            setDisplayResult(true)
        }
        setSelection('')
    }, [selection]);


    return <main>
        <button onClick={() => setSelection('stone')}>Rock</button>
        <button onClick={() => setSelection('paper')}>Paper</button>
        <button onClick={() => setSelection('scissors')}>Scissors</button>
        {<Grow
        in={displayResult}
        style={{ transformOrigin: '0 0 -100' }}
        {...(displayResult ? { timeout: 1000 } : {})}
    >{displayResult && <p>{gameResult}</p>}</Grow>}
</main>
}
