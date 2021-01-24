import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App.js'

test('button has correct intitial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

 // expect the background color to be red
 expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test('button turns blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  // expect the button text to 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});


test('the button has correct initial text', () => {
  
});