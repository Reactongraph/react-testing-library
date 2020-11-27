import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from './textArea';

const handleChange = (e) => {
    console.log(e.target.value)
}
const setup = () => {
    const utils = render( 
    <TextArea 
        onChange = {(e)=>handleChange(e)}
    />)
    const textArea =  utils.getByLabelText("arial-textarea")
    return {
        textArea,
        utils,
    }
}

test('It should keep a Testing at text-area', () => {
    const { textArea } = setup()
    fireEvent.change(textArea, { target: { value: 'shubham' } })
    expect(textArea.value).not.toBeUndefined()
    expect(textArea.value).toBe('shubham')
})