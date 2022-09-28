import './App.css';
import {useState} from 'react'; 
import Board from './components/Boars/Board';

const App = () => {

  const [turn, setTurn] = useState('x');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({
    x: 0,
    0: 0,
  });


  return (
    <div className="App">
      <Board squares={squares}/>
    </div>
  );
}

export default App;
