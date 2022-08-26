import React, { useState } from "react";
import Input from "./components/InputComponent/inputComponent";
import SelectComponent from "./components/SelectComponent/selectComponent";
import TextArea from "./components/TextAreaComponent/textArea";
import { formData } from "./json";
import CheckboxComponent from "./components/checkBoxComponent/checkboxComponent";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [textArea, setTextArea] = useState("");
  const [selectedInput, setSelectedInput] = useState("");
  const [termsAndConditions, setTermsConditions] = useState(false);

  const handleSubmit = () => {
    if (state.email && state.password && textArea && selectedInput) {
      console.log("form submit successfully");
    } else {
      console.log("please fill all the detail");
    }
  };
  function Onchange(evt) {
    setState((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  }
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
                onChange={Onchange}
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
            onClick={(e) => handleSubmit()}
            id="btn-submit"
            aria-label="arial-btn"
          >
            {" "}
            Save Data{" "}
          </div>
        </div>
      </form>
    </div>
  );
};
export default App;
