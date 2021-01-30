import React, {useState} from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor]  = useState('MediumVioletRed');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div
      onClick={() => setButtonColor(newButtonColor)}
    >
      <button style={{backgroundColor: buttonDisabled ? 'gray' : buttonColor}} disabled={buttonDisabled}>Change to {replaceCamelWithSpaces(newButtonColor)}</button>
      <input 
          type="checkbox"
          id="enable-button-checkbox"
          defaultChecked={buttonDisabled}
          aria-checked={buttonDisabled}
          onChange={(e) => setButtonDisabled(e.target.checked)}
      />
      <label htmlFor="enable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
