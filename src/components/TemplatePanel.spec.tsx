import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as calculator from '../calculator';
import { TemplatePanel } from './TemplatePanel';

describe('TemplatePanel', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('adds the starting values', () => {
    render(<TemplatePanel />);
    expect(screen.getByRole('status')).toHaveTextContent('4');
  });

  it('adds what the user types', async () => {
    const user = userEvent.setup();
    render(<TemplatePanel />);

    await user.clear(screen.getByLabelText('First number'));
    await user.type(screen.getByLabelText('First number'), '10');
    await user.clear(screen.getByLabelText('Second number'));
    await user.type(screen.getByLabelText('Second number'), '5');

    expect(screen.getByRole('status')).toHaveTextContent('15');
  });

  it('asks for numbers when an input is not one', async () => {
    const user = userEvent.setup();
    render(<TemplatePanel />);

    await user.clear(screen.getByLabelText('First number'));
    await user.type(screen.getByLabelText('First number'), 'abc');

    expect(screen.getByRole('status')).toHaveTextContent('Enter two numbers');
  });

  // The panel reports whatever the operation refused with, rather than
  // swallowing it — the behaviour `divide` relies on when given a zero.
  it('shows the message when the operation refuses', () => {
    jest.spyOn(calculator, 'add').mockImplementation(() => {
      throw new Error('Cannot add these');
    });

    render(<TemplatePanel />);

    expect(screen.getByRole('status')).toHaveTextContent('Cannot add these');
  });

  it('falls back to a generic message when a non-Error is thrown', () => {
    jest.spyOn(calculator, 'add').mockImplementation(() => {
      throw 'not an Error';
    });

    render(<TemplatePanel />);

    expect(screen.getByRole('status')).toHaveTextContent('Something went wrong');
  });
});
