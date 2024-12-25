//import React from "react";
import { useState } from 'react';
//import { updateInfo } from "../App";
function GeneralInfo({info, onChange}) {
  return (
    <>
      <div>
        <h1>General Information</h1>
        <div>
          <p>Name</p>
          <input value="John Doe" onChange={(event)=>{onChange({...info, name:event.target.value})}}></input>
        </div>
        <div>
          <p>Email</p>
          <input value="email@example.com" onChange={(event)=>{onChange({...info, email:event.target.value})}}></input>
        </div>
        <div>
          <p>Phone Number</p>
          <input value="1234567890" onChange={(event)=>{onChange({...info, phoneNum:event.target.value})}}></input>
        </div>
      </div>
    </>
  )
}

export default GeneralInfo;