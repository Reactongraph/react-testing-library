import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxComponent from './checkboxComponent';
import { Labels } from '../../App.test'

const setup = () => {
  const utils = render(<CheckboxComponent />);
  const input = utils.getByLabelText(Labels.checkbox)
  return {
    input,
    ...utils,
  }
}

test('renders CheckboxComponent react link', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { checked: true } })
  expect(input.checked).toBe(true)
});
