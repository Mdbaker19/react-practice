import './App.css';

function App(person) {

  // jsx syntax
  return (
    <div className="personCard">
      <h1>{person.name}</h1>
      <p>{person.age}</p>
    </div>
  );
}

export default App;
