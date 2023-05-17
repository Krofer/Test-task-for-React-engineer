import React from 'react';
import { screen } from '@testing-library/react';
import { MainPage } from './index';
import { renderWithProviders } from "../../utils/test-utils";

test('Render main page', async () => {
  renderWithProviders(<MainPage />);

  const linkElement = screen.getByText(/List of Heroes/i);
  expect(linkElement).toBeInTheDocument();

});

test('Await list of heroes', async () => {
  renderWithProviders(<MainPage />);

  expect(await screen.findByText(/Luke Skywalker/i)).toBeInTheDocument()
});
