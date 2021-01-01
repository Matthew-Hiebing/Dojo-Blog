import { useState } from 'react';

const Home = () => {
    // let name = "Matt";
    const [name, setName] = useState('Matt');
    const [age, setAge] = useState('30');

    const handleClick = () => {
        setName('luigi');
        setAge(25);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old.</p>
            <p>{ name }</p>
            <button onClick={ handleClick }>Click me</button>
        </div>
    );
}

export default Home;
