import './App.css';
import Person from "./Person/Person";

function App(props) {

  // jsx syntax
  return (
    <div className="personCard">
        <Person day={props.day}>Hobby child 1, Hobby child 2</Person>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
    </div>
  );
}

export default App;
