import { render, screen } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App.js'

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn testing library/i);
  // expect(linkElement).toBeInTheDocument();
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})