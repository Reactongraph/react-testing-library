import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('when we click on form submit button', () => {
  const {container} = render(<App />)
  const Element = container.querySelector(`#btn-submit`); 

  const inputEmail = container.querySelector(`#exampleInputEmail1`)
  fireEvent.change(inputEmail, { target: { value: '23' } })

  const inputPassword = container.querySelector(`#exampleInputPassword2`)
  fireEvent.change(inputPassword, { target: { value: '8349351712' } })

  const select = container.querySelector(`#exampleFormControlSelect1`)
  fireEvent.change(select, { target: { value: '1' } })
    
  const textArea = container.querySelector(`#textarea`)
  fireEvent.change(textArea, { target: { value: 'my name is react hub' } })

  const checkbox = container.querySelector('#check1')
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


