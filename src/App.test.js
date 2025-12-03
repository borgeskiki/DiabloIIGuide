import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Diablo II Resurrected Boss Guide', () => {
  render(<App />);
  const headingElement = screen.getByText(/Diablo II Resurrected Boss Guide/i);
  expect(headingElement).toBeInTheDocument();
});
