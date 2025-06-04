// src/App.test.jsx

import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'; // Importante para .toBeInTheDocument()

describe('App Component', () => {
  test('should render "Vite + React" text', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });
});