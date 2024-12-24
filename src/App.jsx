import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Resume from "./components/Resume"
import GeneralInfo from "./components/GeneralInfo"
import JobExperience from './components/JobExperience'
import EducationalExperience from './components/EducationalExperience'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [info, setInfo] = useState({
    name: "John Doe",
    email: "email@example.com",
    phoneNum: "11111111111",
  });
  function updateGeneralInfo(newInfo) {
    setInfo(newInfo);
  }
  return (
    <>
      <GeneralInfo info={info} onChange={updateGeneralInfo}></GeneralInfo>
      <EducationalExperience></EducationalExperience>
      <JobExperience></JobExperience>
      <Resume></Resume>
    </>
  )
}

export default App
