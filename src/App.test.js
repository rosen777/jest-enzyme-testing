import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

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
