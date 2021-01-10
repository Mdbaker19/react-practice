import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

    state = {
        persons: [
            { name: 'matt', age: 25, bday: 4 },
            { name: 'man', age: 22, bday: 1 },
            { name: 'nemo', age: 2, bday: 3 },
        ],
        otherState: "set people value for the set people called in name handlers"
    };

    // when this is called, otherState is basically removed, needs to be added as this just overwrites people (the persons array)
    changeNameHandler = (nameList, name) => {
        this.setState({
            persons: [
                { name: name ?? nameList[0], age: 25, bday: "4th" },
                { name: name ?? nameList[1], age: 22, bday: "1st" },
                { name: name ?? nameList[2], age: 2, bday: "3rd" },
            ]
        });
    }

    properNames = ["Matthew", "Hue Man", "Nemo Goat Snake"];

    // this e object is passed automatically by React
    nameChangeHandler = (e) => {
        this.setState ( {
            persons : [
                { name: "M", age: 1 },
                { name: e.target.value, age: 1 },
                { name: "N", age: 1 },
            ]
        })
    }

    render ()
    {
        // jsx syntax
        return (
            <div className="main">
                <div id="buttonArea">
                    <button onClick={() => this.changeNameHandler(this.properNames, null)}>Proper names</button>
                </div>
                <Person click={this.changeNameHandler.bind(this, null, "Matthew B!")}
                        day={this.state.persons[0].bday} name={this.state.persons[0].name}
                        age={this.state.persons[0].age}>coding, learning, cars, building and music</Person>

                <Person click={() => this.changeNameHandler(null, "Hue Man!")}
                        changed={this.nameChangeHandler}
                        day={this.state.persons[1].bday} name={this.state.persons[1].name}
                        age={this.state.persons[1].age}>being a human, a man and all things people</Person>

                <Person click={() => this.changeNameHandler(null, "Nemo Goat Snake!")}
                        day={this.state.persons[2].bday} name={this.state.persons[2].name}
                        age={this.state.persons[2].age}>play, speak, tricks and treats</Person>

            </div>
        );
    }
}

export default App;


