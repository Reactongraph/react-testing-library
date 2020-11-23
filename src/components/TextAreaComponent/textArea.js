const TextArea = (props) => {
    const {onChange} = props
    return(
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="textarea" name="textArea" rows="3" onChange={(e)=>onChange(e)}></textarea>
        </div>
    )
}
export default TextArea
