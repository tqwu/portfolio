'use client';
import { useState } from 'react';

export default function AboutMe() {

    const [count, setCount] = useState(0);

    return (
        <main>
            <div>About Me page.</div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </main>
    )
}