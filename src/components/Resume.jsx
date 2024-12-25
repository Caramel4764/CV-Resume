import "../styles/resume.css"

function Resume ({info, education, experience}) {
  let educationListElement = [];
  for(let i = 0; i<education.length; i++) {
    educationListElement.push(
    <>
    <div class="info-section">
      <p>{education[i].schoolName}</p>
      <p>{education[i].areaOfstudy}</p>
      <p>{education[i].date}</p>
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
      <p>{experience[i].companyName}</p>
      <p>{experience[i].positionTitle}</p>
      <ul>
        {
        experience[i].responsibilities.forEach((responsibility,index)=>{
        <li key={index}>{responsibility}</li>
        })
        }
      </ul>
      <p>{experience[i].beginDate}</p>
      <p>{experience[i].endDate}</p>
    </div>
    {i!=experience.length-1&&<div className="border"></div>}
    </>
    )
  }
  return (
    <>
      <div id="resume">
        <div id="infoBg">
          <h1 id="name">{info.name}</h1>
          <ul id="basic-info">
            <li>{info.email}</li>
            <li>({info.phoneNum.slice(0,3)}){info.phoneNum.slice(3,6)}-{info.phoneNum.slice(6)}</li>
          </ul>
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