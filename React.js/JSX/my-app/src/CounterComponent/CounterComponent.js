import { useState } from 'react';
import './CounterComponent.css';


function CounterComponent() {
    const [score, setScore] = useState(0);

    const incrementScore = () => setScore(oldScore => oldScore + 1);
    const decrementScore = () => setScore(oldScore => oldScore - 1);

    return (
        <div>
            <h1>Counter Component</h1>
            <p>{score}</p>
            <div>
                <button onClick={incrementScore}>+</button>
                <button onClick={decrementScore}>-</button>

                <button
                    onClick={() => {
                    setScore(0);
                    }}
                >
                    RESET
                </button>

            </div>
        </div>
    );
}

export default CounterComponent;