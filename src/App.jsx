import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Resume from "./components/Resume"
import GeneralInfo from "./components/GeneralInfo"
import JobExperience from './components/JobExperience'
import EducationalExperience from './components/EducationalExperience'
import './App.css'

function App() {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "email@example.com",
    phoneNum: "1234567890",
  });
  const [education, setEducational] = useState([{
    schoolName: "Name of School",
    areaOfstudy: "Area of Study",
    date: "1/1/2024",
  }]);
  const [experience, setExperience] = useState([{
    companyName:"Name of Company",
    positionTitle:"Position Name",
    responsibilities: ["test"],
    beginDate:"1/1/2024",
    endDate:"1/1/2024",
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
      responsibilities: ["test"],
      beginDate:"1/1/2024",
      endDate:"1/1/2024",
    }
    setExperience(exp=>[...exp, newExperience]);
  }
  function addEducation() {
    let newEducation = {
      schoolName: "Name of School",
      areaOfstudy: "Area of Study",
      date: "1/1/2024",
    };
    setEducational(edu=> [...edu, newEducation]);
  }
  function updateExperience(replacement, index) {
    let newExperience = experience.map((exp, i)=>(i===index ? replacement : exp));
    setExperience(newExperience);
  }
  const educations = [];
  const experiences = [];
  for (let i = 0; i<education.length; i++) {
    educations.push(<EducationalExperience info={education[i]} index={i} onChange={updateEducation}></EducationalExperience>);
  }

  for (let i = 0; i<experience.length; i++) {
    experiences.push(<JobExperience info={experience[i]} index={i} onChange={updateExperience}></JobExperience>);
  }

  return (
    <>
      <div id='leftSection'>
        <GeneralInfo info={info} onChange={updateGeneralInfo}></GeneralInfo>
        {educations}
        <button onClick={addEducation}>+</button>
        {experiences}
        <button onClick={addExperience}>+</button>
      </div>
      <Resume info={info} education={education} experience={experience}></Resume>
    </>
  )
}

export default App
