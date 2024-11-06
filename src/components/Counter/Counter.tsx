import React, { useState } from "react";

interface CounterProps {
    initialCount: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h2>Counter</h2>
            <p data-testid="count-value">Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
