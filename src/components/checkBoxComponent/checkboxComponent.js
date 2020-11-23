import React from 'react';

const CheckboxComponent = (props) => {
  const {checked, labelText, onChange, id} = props
  return (
    <div className="checkbox" key={id}>
      <label><input type="checkbox" id={id} value={labelText} aria-label="cost-input" checked={checked || false} onChange={(e)=>onChange(e)}/>{labelText}</label>
    </div>
  )
}

export default CheckboxComponent

