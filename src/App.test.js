import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

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


test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('check box disabled button on first click and enabled button on second click', () => {
    render(<App />);

    // check that the button is initially enabled
    const button = screen.getByRole('button', {name: 'Change to blue'})
    expect(button).toBeEnabled();
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});


    // check that the button is disabled when checkbox is clicked
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();

    // check that the button is enabled when checkbox is clicked again
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
});

test('button turns to gray when disabled snd reverts to red', () => {
  render(<App />);

  // check that the button's color is gray when disabled
  const button = screen.getByRole('button', {name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  //check that when the button is disabled, the background color is gray
  fireEvent.click(checkbox);
  expect(button).toHaveStyle(`background-color: gray`);

  // check that when the button is re-enabled, the background color is red
  fireEvent.click(checkbox);
  expect(button).toHaveStyle(`background-color: red`);
});

test('button turns to gray when disabled', () => {
  render(<App />);

  // check that the button's color is gray when disabled
  const button = screen.getByRole('button', {name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // change button to blue
  fireEvent.click(button);

  // check button to gray
  fireEvent.click(checkbox);
  expect(button).toHaveStyle(`background-color: gray`);

  // back to blue
  fireEvent.click(checkbox);
  expect(button).toHaveStyle(`background-color: blue`);
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})