import { render, screen, fireEvent } from '@testing-library/react';
import Input from './inputComponent';

const handleChange = (e) => {
    console.log(e.target.value)
}
const setup = ({type, id, placeholder, name}) => {
    const {container} = render( 
    <Input 
        type={type} 
        id={id} 
        placeholder={placeholder}
        name={name}
        onChange = {(e)=>handleChange(e)}
    />)
    const input = container.querySelector(`#${id}`)
    return {
        input,
        container,
    }
}
 
test('It should keep an Email', () => {
    const emailObj = {
        type:"email", 
        id:"exampleInputEmail1", 
        placeholder:"Enter email",
        name:"email"
    }
    const { input } = setup(emailObj)
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).not.toBeUndefined()
    expect(input.value).toBe('23')
    expect(input.value.length <= 5).toBeTruthy()
})

test('It should keep an Password Proper', () => {
    const emailObj = {
        type:"password", 
        id:"exampleInputPassword1", 
        placeholder:"Enter password",
        name:"password"
    }
    const { input } = setup(emailObj)
    fireEvent.change(input, { target: { value: '8349351712' } })
    expect(input.value).not.toBeUndefined()
    expect(input.value).toBe('8349351712')
    expect(input.value.length >= 5).toBeTruthy()
})