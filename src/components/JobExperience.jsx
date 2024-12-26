import { FaTrashAlt } from "react-icons/fa";

function JobExperience({info, index, onChange, onDelete}) {
  return (
    <>
      <div>
        <h1>Job Experience {index+1}
          {index!=0&&<FaTrashAlt class="delete" onClick={()=>onDelete(index)} />}
        </h1>
        <div>
          <p>Company Name</p>
          <input onChange={(event)=>onChange({...info, companyName:event.target.value}, index)}></input>
        </div>
        <div>
          <p>Position title</p>
          <input onChange={(event)=>onChange({...info, positionTitle:event.target.value}, index)}></input>
        </div>
        <div>
          <p>Description</p>
          <textarea class="paragraph-input" onChange={(e)=>onChange({...info, description:e.target.value}, index)}></textarea>
        </div>
        <div>
          <p>Beginning Date</p>
          <input type="date" onChange={(e)=>onChange({...info, beginDate:e.target.value}, index)}></input>
        </div>
        <div>
          <p>Ending Date</p>
          <input type="date" onChange={(e)=>onChange({...info, endDate:e.target.value}, index)}></input>
        </div>
      </div>
    </>
  )
}

export default JobExperience;