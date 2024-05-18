import React, { useEffect, useState } from 'react';

function RandomJokeGenerator() {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            setJoke(data.joke);
        }
        catch (error) {
            console.error('Failed to fetch joke', error);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    const handleJokeGenerator = () => {
        fetchJoke();
    };

    return (
        <div>
            <h1>Random Joke Generator</h1>
            <p>{joke}</p>
            <button onClick={handleJokeGenerator}>More Jokes</button>
        </div>
    );
}

export default RandomJokeGenerator;
