const TextArea = (props) => {
  const { onChange } = props;
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
      <textarea
        className="form-control"
        id="textarea"
        name="textArea"
        rows="3"
        aria-label="arial-textarea"
        onChange={onChange}
      ></textarea>
    </div>
  );
};
export default TextArea;
