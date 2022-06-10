import './App.css';
import { useState } from 'react';
import AnimalParade from './AnimalParade';
import Header from './Header';
import ZooOpen from './ZooOpen';
function App() {

  const [snakeSize, setSnakeSize] = useState(2);
  const [parrotSize, setParrotSize] = useState(2);
  const [animals, setAnimals] = useState(['duck', 'goose', 'chicken']);
  const [isZooOpen, setZooOpen] = useState(true);

  function addAnimal() {
    const randomNum = Math.floor(Math.random() * 3);
    animals.push(animals[randomNum]);
    setAnimals(animals.slice());
  }

  return (
    <div className="App">
      <Header />
      <section className='fighter-container'>
        <div className='fighters'>
          <p style={{ fontSize: `${snakeSize * 10}px` }}>🐍</p>
          <button onClick={() => setSnakeSize(snakeSize + 1)}>Attack1!</button>
          <button onClick={() => setParrotSize(parrotSize - 1)}>Attack2</button>
        </div>
        <button onClick={() => setZooOpen(!isZooOpen)}>{isZooOpen ? 'Close Zoo' : 'Open Zoo'}</button>
        <div className='fighters'>
          <p style={{ fontSize: `${parrotSize * 10}px` }}>🦜</p>
          <button onClick={() => setParrotSize(parrotSize + 1)}>Attack3</button>
          <button onClick={() => setSnakeSize(snakeSize - 1)}>Attack4</button>
        </div>
      </section>
      <ZooOpen isZooOpen={isZooOpen}/>
      <AnimalParade animals={animals}/>

      <button onClick={addAnimal}>Add a random animal</button>
    </div>
  );
}

export default App;
