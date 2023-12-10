import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../../App.jsx';

describe("something to be truthy", () => {
  it('true should be true', () => {
    expect(true).toBe(true);
  })

  it('should render app title', () => {
    render(<App/>)
    expect(screen.getByRole("heading").textContent).toMatch(/hello world/i);
  });
})