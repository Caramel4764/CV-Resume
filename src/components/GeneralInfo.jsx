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
          <input onChange={(event)=>{onChange({...info, name:event.target.value})}}></input>
        </div>
        <div>
          <p>Email</p>
          <input onChange={(event)=>{onChange({...info, email:event.target.value})}}></input>
        </div>
        <div>
          <p>Phone Number</p>
          <input onChange={(event)=>{onChange({...info, phoneNum:event.target.value})}}></input>
        </div>
        <div>
          <input type="file" accept="image/*" onChange={(event)=>{onChange({...info, profile: URL.createObjectURL(event.target.files[0])})}}></input>
        </div>
      </div>
    </>
  )
}

export default GeneralInfo;