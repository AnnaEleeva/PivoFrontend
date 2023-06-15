import React, {useState} from "react";
import axios from "axios";
import RandomName from "./components/RandomName";
import './styles/App.css';
function App() {

    const [id, setId] = useState('0')

    const  [name, setName] = useState('user_name')
    const  [age, setAge] = useState('user_age')
    const [photo, setPhoto] = useState('https://upload.wikimedia.org/wikipedia/ru/b/b7/Sylvester_character.gif')


    async function fetchUser(){
        const response = await axios.get('https://pivoback.azurewebsites.net/api/user?userId='+id)
        setName(response.data.name)
        setAge(response.data.age)
        setPhoto(response.data.link)
    }

    return (
        <div className="App">
            <div className="Random">
                <RandomName/>
            </div>

            <div className="User">
                <div className="Photo">
                    <img src={photo} alt=""/>
                </div>

                <div className="Info">
                    <h1>Name: {name}</h1>
                    <h1>Age: {age}</h1>
                </div>
                <div className="Id">
                    <h1>id: {id}</h1>
                    <input
                        type="text"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <br></br>
                    <button onClick={fetchUser}>GET USER FROM SERVER</button>

                </div>

            </div>

        </div>
    );
}

export default App;
