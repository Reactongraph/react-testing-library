import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from './textArea';

const handleChange = (e) => {
    console.log(e.target.value)
}
const setup = () => {
    const {container} = render( 
    <TextArea 
        onChange = {(e)=>handleChange(e)}
    />)
    const textArea = container.querySelector(`#textarea`)
    return {
        textArea,
        container,
    }
}

test('It should keep a Testing at text-area', () => {
    const { textArea } = setup()
    fireEvent.change(textArea, { target: { value: 'shubham' } })
    expect(textArea.value).not.toBeUndefined()
    expect(textArea.value).toBe('shubham')
})