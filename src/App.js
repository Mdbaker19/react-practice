import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: 'matt', age: 25, bday: 4 },
            { name: 'man', age: 22, bday: 1 },
            { name: 'nemo', age: 2, bday: 3 },
        ]
    }

    changeNameHandler = () => {
        this.setState({
            persons: [
                { name: 'Mattthew', age: 25, bday: 4 },
                { name: 'Hue Man', age: 22, bday: 1 },
                { name: 'Nemo the Dog', age: 2, bday: 3 },
            ]
        });
    }

    render () {
        // jsx syntax
        return (
            <div className="main">
                <div id="buttonArea">
                    <button onClick={this.changeNameHandler}>Proper names</button>
                </div>
                <Person day={this.state.persons[0].bday} name={this.state.persons[0].name} age={this.state.persons[0].age}>coding, learning, cars, building and music</Person>
                <Person day={this.state.persons[1].bday} name={this.state.persons[1].name} age={this.state.persons[1].age}>being a human, a man and all things people</Person>
                <Person day={this.state.persons[2].bday} name={this.state.persons[2].name} age={this.state.persons[2].age}>play, speak, tricks and treats</Person>
            </div>
        );
    }
}

export default App;
