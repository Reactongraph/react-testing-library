const Input = (props) => {
    const { type, id, describedby, placeholder, onChange, name, value} = props
    return(
        <input type={type} name={name} className="form-control" id={id} aria-describedby={describedby} placeholder={placeholder} onChange={(e)=>onChange(e)} value={value}/>
    )
}
export default Input
