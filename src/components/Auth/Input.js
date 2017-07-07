import React from 'react';
import {Label, Input } from 'semantic-ui-react'

const InputField = ({label, type, input, meta:{touched, error}}) => (
    <div className="input-row">
     <label>{label}</label>
      <Input {...input} type={type}/>
      {touched && error && 
       <span className="error">
           <Label basic color='red' pointing>
             {error}
           </Label>
       </span>}
    </div>
  )

export default InputField;