import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Resume from "./components/Resume"
import GeneralInfo from "./components/GeneralInfo"
import JobExperience from './components/JobExperience'
import EducationalExperience from './components/EducationalExperience'
import './App.css'
import { FaPlusSquare } from "react-icons/fa";

function App() {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "email@example.com",
    phoneNum: "1234567890",
    profile: "none",
    skills: [],

  });
  const [education, setEducational] = useState([{
    schoolName: "School Name",
    areaOfstudy: "Computer Science",
    date: "2024-01-01",
    description:"",
  }]);
  const [experience, setExperience] = useState([{
    companyName:"Company Name",
    positionTitle:"Position Name",
    beginDate:"2024-01-01",
    endDate:"2024-01-01",
    description:"",
  }]);
  function updateGeneralInfo(info) {
    setInfo(info);
  }
  function updateEducation(replacement, index) {
    let newEducation = education.map((edu, i)=>(i === index ? replacement : edu))
    setEducational(newEducation);
  }
  function addExperience() {
    let newExperience = {
      companyName:"Name of Company",
      positionTitle:"Position Name",
      beginDate:"2024-01-01",
      endDate:"2024-01-01",
      description:"",
    }
    setExperience(exp=>[...exp, newExperience]);
  }
  function addEducation() {
    let newEducation = {
      schoolName: "Name of School",
      areaOfstudy: "Area of Study",
      date: "2024-01-01",
      description:"",
    };
    setEducational(edu=> [...edu, newEducation]);
  }
  function deleteEducation(index) {
    setEducational(education.filter((edu, i)=>i!=index));
  }
  function updateExperience(replacement, index) {
    let newExperience = experience.map((exp, i)=>(i===index ? replacement : exp));
    setExperience(newExperience);
  }
  function deleteExperience(index) {
    setExperience(experience.filter((exp, i)=>index!=i));
  }
  const educations = [];
  const experiences = [];
  for (let i = 0; i<education.length; i++) {
    educations.push(<EducationalExperience info={education[i]} index={i} onDelete={deleteEducation} onChange={updateEducation}></EducationalExperience>);
  }

  for (let i = 0; i<experience.length; i++) {
    experiences.push(<JobExperience info={experience[i]} index={i} onDelete={deleteExperience} onChange={updateExperience}></JobExperience>);
  }

  return (
    <>
      <div id='leftSection'>
        <GeneralInfo info={info} onChange={updateGeneralInfo}></GeneralInfo>
        {educations}
        <FaPlusSquare class="add" onClick={addEducation}/>
        {experiences}
        <FaPlusSquare class="add" onClick={addExperience}/>
      </div>
      <Resume info={info} education={education} experience={experience}></Resume>
    </>
  )
}

export default App
