import {describe, it, expect} from 'vitest';
import {render, screen, within} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Accordion from './Accordion.jsx';

describe("Accordion FAQ component", () => {

  beforeEach(() => {
    render(<Accordion />);
  })

  test('Accordion component renders with title FAQs', () => {
    const title = screen.getByRole('heading', {name: 'FAQs'})

    expect(title).toBeInTheDocument();
  })

  test('Accordion header Icon is rendered', () => {
    const icon = screen.getByTestId('heading-icon-star');

    expect(icon).toBeInTheDocument();
  })

  test('Accordion header Icon is ignored by screen readers', () => {
    const icon = screen.queryByRole("img", {name: ''});

    expect(icon).not.toBeInTheDocument();
  })

  test('accordion items are rendered to the screen', async () => {
    const items = await screen.findAllByRole('article');
    expect(items.length).toEqual(4);
  })

  test('accordion items are originally closed', async () => {
    const items = await screen.findAllByRole('article');

    items.forEach(async (item, index) => {
      const answer = within(item).queryByTestId('answer');
      expect(answer).not.toBeInTheDocument();
    })
  })

  test('accordion item button opens when clicked', async () => {
    const items = await screen.findAllByRole('article');
    const user = userEvent.setup();
    for (const item of items) {
      // Button and dropdown answer selector in article component
      const button = within(item).getByRole('button');
      const answer = within(item).queryByTestId('answer');

      // should originally have closed state
      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(answer).not.toBeInTheDocument();
      await user.click(button);
      // Should have open state
      const answerAfterClick = await within(item).findByTestId('answer');
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(answerAfterClick).toBeInTheDocument();
      // expect(within(item).findByTestId('answer')).toBeInTheDocument();
    }
  })

  test('accordion only has one item open at a time', async () => {
    const items = await screen.findAllByRole('article');
    const user = userEvent.setup();

    const button1 = within(items[0]).getByRole('button');
    const button2 = within(items[1]).getByRole('button');

    // Open first article
    await user.click(button1);
    expect(within(items[0]).getByTestId('answer')).toBeInTheDocument();

    await user.click(button2);
    // article 2 should be open, and article 1 closed.
    expect(within(items[1]).getByTestId('answer')).toBeInTheDocument();
    expect(within(items[0]).queryByTestId('answer')).not.toBeInTheDocument();
  })
})