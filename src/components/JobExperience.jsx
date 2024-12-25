

function JobExperience({info, index, onChange}) {
  return (
    <>
      <div>
        <h1>Job Experience {index+1}</h1>
        <div>
          <p>Company Name</p>
          <input onChange={(event)=>onChange({...info, companyName:event.target.value}, index)}></input>
        </div>
        <div>
          <p>Position title</p>
          <input></input>
        </div>
        <div>
          <p>Responsibility</p>
          <input></input>
        </div>
        <div>
          <p>Beginning Date</p>
          <input></input>
        </div>
        <div>
          <p>Ending Date</p>
          <input></input>
        </div>
      </div>
    </>
  )
}

export default JobExperience;