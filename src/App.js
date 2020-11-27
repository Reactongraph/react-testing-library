import React, { useState } from 'react';
import Input from './components/InputComponent/inputComponent'
import SelectComponent from './components/SelectComponent/selectComponent'
import TextArea from './components/TextAreaComponent/textArea'
import CheckboxComponent from './components/checkBoxComponent/checkboxComponent'
import './App.css';

const App = () => {

  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedInput, setSelectedInput] = useState('')
  const [termsAndConditions, setTermsConditions] = useState(false)

  const handleSubmit = () => {
    if(email && password && textArea && selectedInput){
      console.log("form submit successfully")
    }else{
      console.log("please fill all the detail")
    }
  }

  return (
    <div className="App cstm">
      <form className="form-wrapper">
        <h1> User Form POC</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Input
            type="email"
            id="exampleInputEmail1"
            value={email}
            describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            ariaLabel="label-email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <Input
            type="password"
            id="exampleInputPassword2"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
            ariaLabel="label-password"
          />
        </div>
        <SelectComponent onChange={(e) => setSelectedInput(e.target.value)}  ariaLabel = "arial-select"/>
        <TextArea onChange={(e) => setTextArea(e.target.value)} />
        <CheckboxComponent
          checked={termsAndConditions}
          labelText="Accept All terms and conditions"
          id="check1"
          onChange={(e) => setTermsConditions(e.target.checked)}
        />
        <div className="btn-wrap">
          <div className="btn" onClick={(e) => handleSubmit()} id="btn-submit" aria-label="arial-btn"> Save Data </div>
        </div>
      </form>
    </div>
  )
}
export default App;
