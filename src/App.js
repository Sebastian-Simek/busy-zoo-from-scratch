import './App.css';
import { useState } from 'react';
import AnimalParade from './AnimalParade';
import Header from './Header';
function App() {

  const [snakeSize, setSnakeSize] = useState(2);
  const [parrotSize, setParrotSize] = useState(2);


  return (
    <div className="App">
      <Header />
      <section className='fighter-container'>
        <div className='fighters'>
          <p style={{ fontSize: `${snakeSize * 10}px` }}>🐍</p>
          <button onClick={() => setSnakeSize(snakeSize + 1)}>Attack1!</button>
          <button onClick={() => setParrotSize(parrotSize - 1)}>Attack2</button>
        </div>
        <div className='fighters'>
          <p style={{ fontSize: `${parrotSize * 10}px` }}>🦜</p>
          <button onClick={() => setParrotSize(parrotSize + 1)}>Attack3</button>
          <button onClick={() => setSnakeSize(snakeSize - 1)}>Attack4</button>
        </div>
      </section>
      <div className='open-close'>
        OPEN or CLOSE will go here
      </div>
      <AnimalParade />






    </div>
  );
}

export default App;
