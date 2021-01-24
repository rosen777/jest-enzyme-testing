import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor]  = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div
      style={{backgroundColor: buttonColor}}
      onClick={() => setButtonColor(newButtonColor)}
    >
      <button style={{backgroundColor: buttonColor}}>Change to {newButtonColor}</button>
    </div>
  );
}

export default App;
