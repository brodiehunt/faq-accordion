import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import AccordionItem from './AccordionItem';


describe('Accordion Article not open', () => {
  const title = 'Example Test Title';
  const answer = "Example Test Answer";
  const id = "test-id";
  let mockOnClick;

  beforeEach(() => {
    mockOnClick = vi.fn();
    render(<AccordionItem title={title} answer={answer} id={id} isOpen={false} onClick={mockOnClick}/>)
  })

  it('Renders to the screen with title', () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it('Renders the correct title button text', () => {
    expect(screen.getByRole("button", {name: 'Example Test Title'})).toBeInTheDocument();
  });

  it('Does not display title img icon to screen readers', () => {
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it('Renders the Plus Icon for the closed state', () => {
    expect(screen.getByTestId("heading-icon")).toHaveAttribute('src', '/src/assets/icon-plus.svg')
  })

  it('Does not render answer to the screen when isOpen = false', () => {
    expect(screen.queryByText(answer)).not.toBeInTheDocument();
  });

  it('Button has correct aria-expanded attribute on render', () => {
    const button = screen.getByRole("button", {name: title})
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('onClick callback gets called with correct param value', async () => {
    const button = screen.getByRole("button", {name: title})
    const user = userEvent.setup();

    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledWith(id);
  });
  
})

describe('Accordion Article not open', () => {
  const title = 'Example Test Title';
  const answer = "Example Test Answer";
  const id = "test-id";
  let mockOnClick;

  beforeEach(() => {
    mockOnClick = vi.fn();
    render(<AccordionItem title={title} answer={answer} id={id} isOpen={true} onClick={mockOnClick}/>)
  })

  it('Renders to the screen with title', () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it('Renders the correct title button text', () => {
    expect(screen.getByRole("button", {name: 'Example Test Title'})).toBeInTheDocument();
  });

  it('Does not display title img icon to screen readers', () => {
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it('Renders the Minus Icon for the open state', () => {
    expect(screen.getByTestId("heading-icon")).toHaveAttribute('src', '/src/assets/icon-minus.svg')
  })

  it('Does render answer to the screen when isOpen = true', () => {
    expect(screen.queryByText(answer)).toBeInTheDocument();
  });

  it('Button has correct aria-expanded attribute on render', () => {
    const button = screen.getByRole("button", {name: title})
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('onClick callback gets called with correct param value', async () => {
    const button = screen.getByRole("button", {name: title})
    const user = userEvent.setup();

    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledWith(id);
  });
  
})