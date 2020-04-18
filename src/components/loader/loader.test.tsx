import React from 'react';
import { render } from '@testing-library/react';
import {Loader} from "./index";

test('renders learn react link', () => {
  const { getByText } = render(<Loader />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
