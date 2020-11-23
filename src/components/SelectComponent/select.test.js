import { render, screen, fireEvent } from '@testing-library/react';
import SelectComponent from './selectComponent';

const handleChange = (e) => {
    console.log(e.target.value)
}
const setup = () => {
    const {container} = render( 
    <SelectComponent 
        onChange = {(e)=>handleChange(e)}
    />)
    const select = container.querySelector(`#exampleFormControlSelect1`)
    return {
        select,
        container,
    }
}

test('It should keep an Select', () => {
    const { select } = setup()
    fireEvent.change(select, { target: { value: '1' } })
    expect(select.value).not.toBeUndefined()
    expect(select.value).toBe('1')
})

