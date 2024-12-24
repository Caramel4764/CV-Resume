//import React from "react";
import { useState } from 'react';
//import { updateInfo } from "../App";
function GeneralInfo({info, onChange}) {
  /*const [info, setinfo] = useState({
    name: "",
    email: "",
    phoneNum: "",
  });*/
  return (
    <>
      <div>
        <h1>General Information</h1>
        <div>
          <p>{info.name}</p>
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
      </div>
    </>
  )
}

export default GeneralInfo;