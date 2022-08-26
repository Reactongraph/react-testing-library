import React, { useState } from "react";
import Input from "./components/InputComponent/inputComponent";
import SelectComponent from "./components/SelectComponent/selectComponent";
import TextArea from "./components/TextAreaComponent/textArea";
import { formData } from "./json";
import CheckboxComponent from "./components/checkBoxComponent/checkboxComponent";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [textArea, setTextArea] = useState("");
  const [selectedInput, setSelectedInput] = useState("");
  const [termsAndConditions, setTermsConditions] = useState(false);

  const handleSubmit = () => {
    if (email && password && textArea && selectedInput) {
      alert("form submit successfully");
    } else {
      alert("please fill all the detail");
    }
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  return (
    <div className="App cstm">
      <form className="form-wrapper">
        <h1> User Form POC</h1>
        {formData.map((data, id) => {
          return (
            <div className="form-group" key={id}>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <Input
                type={data.type}
                id={data.id}
                defaultValue={data.value}
                describedby={data.describedby}
                placeholder={data.placeholder}
                name={data.name}
                onChange={handleChange}
                ariaLabel={data.ariaLabel}
              />
            </div>
          );
        })}
        <SelectComponent
          onChange={(e) => setSelectedInput(e.target.value)}
          ariaLabel="arial-select"
        />
        <TextArea onChange={(e) => setTextArea(e.target.value)} />
        <CheckboxComponent
          checked={termsAndConditions}
          labelText="Accept All terms and conditions"
          id="check1"
          onChange={(e) => setTermsConditions(e.target.checked)}
        />
        <div className="btn-wrap">
          <div
            className="btn"
            onClick={handleSubmit}
            id="btn-submit"
            aria-label="arial-btn"
          >
            Save Data
          </div>
        </div>
      </form>
    </div>
  );
};
export default App;
