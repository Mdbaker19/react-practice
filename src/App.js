import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const App = (props) => {

    const [ people, setPeople ] = useState ({
        persons: [
            { name: 'matt', age: 25, bday: 4 },
            { name: 'man', age: 22, bday: 1 },
            { name: 'nemo', age: 2, bday: 3 },
        ],
        otherState: "set people value"
    });

    const [otherState, setOtherState] = useState("some other value");

    console.log(people, otherState);

    // when this is called, otherState is basically removed, needs to be added as this just overwrites people (the persons array)
    const changeNameHandler = () => {
        setPeople({
            persons: [
                { name: 'Mattthew', age: 25, bday: "4th" },
                { name: 'Hue Man', age: 22, bday: "1st" },
                { name: 'Nemo the Dog', age: 2, bday: "3rd" },
            ]
        });
    }
    // jsx syntax
    return (
        <div className="main">
            <div id="buttonArea">
                <button onClick={changeNameHandler}>Proper names</button>
            </div>
            <Person day={people.persons[0].bday} name={people.persons[0].name} age={people.persons[0].age}>coding, learning, cars, building and music</Person>
            <Person day={people.persons[1].bday} name={people.persons[1].name} age={people.persons[1].age}>being a human, a man and all things people</Person>
            <Person day={people.persons[2].bday} name={people.persons[2].name} age={people.persons[2].age}>play, speak, tricks and treats</Person>
        </div>
    );
}

export default App;


