import { render, screen, fireEvent } from '@testing-library/react';
import SelectComponent from './selectComponent';

const handleChange = (e) => {
    console.log(e.target.value)
}
const setup = () => {
    const utils = render( 
    <SelectComponent 
        onChange = {(e)=>handleChange(e)}
        ariaLabel = "arial-select"
    />)
    const select =  utils.getByLabelText("arial-select")
    return {
        select,
        utils,
    }
}

test('It should keep an Select', () => {
    const { select } = setup()
    fireEvent.change(select, { target: { value: '1' } })
    expect(select.value).not.toBeUndefined()
    expect(select.value).toBe('1')
})

