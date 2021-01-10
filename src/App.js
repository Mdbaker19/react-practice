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
        otherState: "set people value for the set people called in name handlers"
    });

    const [otherState, setOtherState] = useState("some other value");

    console.log(people, otherState);

    // when this is called, otherState is basically removed, needs to be added as this just overwrites people (the persons array)
    const changeNameHandler = (nameList, name) => {
        setPeople({
            persons: [
                { name: name ?? nameList[0], age: 25, bday: "4th" },
                { name: name ?? nameList[1], age: 22, bday: "1st" },
                { name: name ?? nameList[2], age: 2, bday: "3rd" },
            ]
        });
    }

    const properNames = ["Matthew", "Hue Man", "Nemo Goat Snake"];

    // this e object is passed automatically by React
    const nameChangeHandler = (e) => {
        setPeople ( {
            persons : [
                { name: "M", age: 1 },
                { name: e.target.value, age: 1 },
                { name: "N", age: 1 },
            ]
        })
    }

    // jsx syntax
    return (
        <div className="main">
            <div id="buttonArea">
                <button onClick={ () => changeNameHandler(properNames, null) }>Proper names</button>
            </div>
            <Person click={ changeNameHandler.bind(this, null, "Matthew B!")}
                    day={people.persons[0].bday} name={people.persons[0].name}
                    age={people.persons[0].age}>coding, learning, cars, building and music</Person>

            <Person click={ () => changeNameHandler(null, "Hue Man!")}
                    changed={ nameChangeHandler }
                    day={people.persons[1].bday} name={people.persons[1].name}
                    age={people.persons[1].age}>being a human, a man and all things people</Person>

            <Person click={ () => changeNameHandler(null, "Nemo Goat Snake!")}
                    day={people.persons[2].bday} name={people.persons[2].name}
                    age={people.persons[2].age}>play, speak, tricks and treats</Person>

        </div>
    );
}

export default App;


