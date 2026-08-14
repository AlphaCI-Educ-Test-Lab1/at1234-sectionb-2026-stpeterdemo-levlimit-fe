import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('renders the heading and the panel', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'at1234-sectionb-2026-stpeterdemo-levlimit-fe',
    );
    expect(screen.getByRole('status')).toHaveTextContent('4');
  });
});
