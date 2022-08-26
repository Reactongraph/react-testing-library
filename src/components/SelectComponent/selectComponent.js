const SelectComponent = (props) => {
  const { onChange, ariaLabel } = props;
  const array = [1,2,3,4,5];
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">Select Number</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        onChange={(e) => onChange(e)}
        aria-label={ariaLabel}
      >
        {
          array?.map((res, id)=>
            <option value={id+1}>{res}</option>
          )
        }
      </select>
    </div>
  );
};
export default SelectComponent;
