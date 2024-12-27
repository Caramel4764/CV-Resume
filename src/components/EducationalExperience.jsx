import { FaTrashAlt } from "react-icons/fa";

function EducationalExperience({info, index, onChange, onDelete}) {
  return (
    <>
      <div>
        <h1>Educational Experience {index+1}
          {index!=0&&<FaTrashAlt class="delete" onClick={()=>onDelete(index)} />}
        </h1>
        <div>
          <p>School Name</p>
          <input onChange={(event)=>{onChange({...info, schoolName:event.target.value}, index)}}></input>
        </div>
        <div>
          <p>Title of Study</p>
          <input onChange={(event)=>{onChange({...info, areaOfstudy:event.target.value}, index)}}></input>
        </div>
        <div>
          <p>Description</p>
          <input onChange={(event)=>{onChange({...info, description:event.target.value}, index)}}></input>
        </div>
        <div>
          <p>Date of Study</p>
          <input type="date" onChange={(event)=>{onChange({...info, date:event.target.value}, index)}}></input>
        </div>
      </div>
    </>
  )
}

export default EducationalExperience;