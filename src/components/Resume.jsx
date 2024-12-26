import "../styles/resume.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import noProfile from "../assets/noProfile.png";

function Resume ({info, education, experience}) {
  let educationListElement = [];
  for(let i = 0; i<education.length; i++) {
    educationListElement.push(
    <>
    <div class="info-section">
      <p>{education[i].schoolName} ({education[i].areaOfstudy})</p>
      <p>{education[i].date.slice(5,7)}/{education[i].date.slice(8,10)}/{education[i].date.slice(0,4)}</p>
    </div>
    {i!=education.length-1&&<div className="border"></div>}
    </>
    )
  }
  let experienceList = [];
  for (let i = 0; i<experience.length; i++) {
    experienceList.push(
    <>
    <div class="info-section">
      <p>{experience[i].companyName} ({experience[i].positionTitle})</p>
      <ul>
        {
        experience[i].responsibilities.forEach((responsibility,index)=>{
        <li key={index}>{responsibility}</li>
        })
        }
      </ul>
      <p>{experience[i].beginDate.slice(5,7)}/{experience[i].beginDate.slice(8,10)}/{experience[i].beginDate.slice(0,4)} - {experience[i].endDate.slice(5,7)}/{experience[i].endDate.slice(8,10)}/{experience[i].endDate.slice(0,4)}</p>
    </div>
    {i!=experience.length-1&&<div className="border"></div>}
    </>
    )
  }
  return (
    <>
      <div id="resume">
        <div id="infoBg">
          <div id="profile-flex">
            <div id="profile-section">
              <div id="profile-border">
              {info.profile=="none"?<img id="profile" src={noProfile}></img>:<img id="profile" src={info.profile}></img>}
              </div>
            </div>

            <div id="profile-word-section">
              <div id="profile-vertical-div">
                <h1 id="name">{info.name}</h1>
                <ul id="basic-info">
                  <li><IoIosMail />{info.email}</li>
                  <li><FaPhoneAlt />({info.phoneNum.slice(0,3)}){info.phoneNum.slice(3,6)}-{info.phoneNum.slice(6)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="divider">
          <h2>Education</h2>
          {educationListElement}
        </div>

        <div class="divider">
          <h2>Work Experience</h2>
          {experienceList}
        </div>
      </div>
    </>
  )
}

export default Resume;