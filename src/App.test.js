import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

export const Labels = {
  button: 'arial-btn',
  email: 'label-email',
  password: 'label-password',
  select: 'arial-select',
  textArea: 'arial-textarea',
  checkbox: 'cost-input'
}

test('when we click on form submit button', () => {
  const utils = render(<App />)
  const Element = utils.getByLabelText(Labels.button)

  const inputEmail = utils.getByLabelText(Labels.email)
  fireEvent.change(inputEmail, { target: { value: '23' } })

  const inputPassword = utils.getByLabelText(Labels.password)
  fireEvent.change(inputPassword, { target: { value: '8349351712' } })

  const select = utils.getByLabelText(Labels.select)
  fireEvent.change(select, { target: { value: '1' } })
    
  const textArea = utils.getByLabelText(Labels.textArea)
  fireEvent.change(textArea, { target: { value: 'my name is react hub' } })

  const checkbox = utils.getByLabelText(Labels.checkbox)
  fireEvent.change(checkbox, { target: { checked: true } })

  expect(fireEvent.click(Element)).toBeTruthy()
  expect(inputEmail.value).not.toBeUndefined()
  expect(inputEmail.value).toBe('23')

  expect(inputPassword.value).not.toBeUndefined()
  expect(inputPassword.value).toBe('8349351712')
  expect(inputPassword.value.length >= 5).toBeTruthy()

  expect(textArea.value).not.toBeUndefined()
  expect(textArea.value).toBe('my name is react hub')

  expect(select.value).not.toBeUndefined()
  expect(select.value).toBe('1')

  expect(checkbox.checked).toBe(true)
});


