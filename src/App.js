import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor]  = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div
      onClick={() => setButtonColor(newButtonColor)}
    >
      <button style={{backgroundColor: buttonColor}} disabled={buttonDisabled}>Change to {newButtonColor}</button>
      <input 
          type="checkbox"
          id="enable-button-checkbox"
          defaultChecked={buttonDisabled}
          aria-checked={buttonDisabled}
          onChange={(e) => setButtonDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
