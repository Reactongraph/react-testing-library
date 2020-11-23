const SelectComponent = (props) => {
    const { onChange} = props
    return(
     <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Select Number</label>
        <select className="form-control" id="exampleFormControlSelect1" onChange={(e)=>onChange(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    )
}
export default SelectComponent
