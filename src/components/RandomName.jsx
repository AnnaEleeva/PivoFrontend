import React, {useState} from 'react';
import axios from "axios";

const RandomName = function () {
    const  [randomName, setRandomName] = useState('random_name')

    async function fetchName(){
        const response = await axios.get('http://localhost:8081/api/name')
        setRandomName(response.data)
    }

    return (
        <div>
            <h1>This is random name: </h1>
            <h2>{randomName}</h2>
            <button onClick={fetchName}>GET RANDOM NAME FROM SERVER</button>
        </div>
    );
};

export default RandomName;