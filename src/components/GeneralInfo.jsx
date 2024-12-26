//import React from "react";
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
//import { updateInfo } from "../App";
function GeneralInfo({info, onChange}) {
  function handleComma(value) {
    if (value.indexOf(",") != -1) {
      //newList = info.skills.map(()=>map);
      onChange({...info, skills:[...info.skills, value.slice(0, value.length-1)]})
      return "";
    }
  }
  function deleteSkill(index) {
    let newList = info.skills.filter((skill, i)=>(i!=index));
    onChange({...info, skills:newList});
  }
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
          <p>Skills (Separated with comma)</p>
          <input onChange={(event)=>{
            if (handleComma(event.target.value) == "") {
              event.target.value = handleComma(event.target.value);
            }
          }}>
          </input>
          <ul>
            {
              info.skills.map((skill, index)=>(
                <li>{skill}<FaTrashAlt onClick={()=>deleteSkill(index)} class="delete small"/></li>
              ))
            }
          </ul>
        </div>
        <div>
          <p>Profile Image</p>
          <input id="profile-input" type="file" accept="image/*" onChange={(event)=>{onChange({...info, profile: URL.createObjectURL(event.target.files[0])})}}></input>
        </div>
      </div>
    </>
  )
}

export default GeneralInfo;