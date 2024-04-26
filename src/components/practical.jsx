import { useState } from "react";

function Practical() {
    const [edit, setEdit] = useState(true);
    const [information, setInformation] = useState({
        companyName: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: ""
    });

    function onSubmit(event) {
        event.preventDefault();
        setEdit(!edit);
        setInformation({
            ...information,
            companyName: event.target.companyName.value,
            position: event.target.position.value,
            responsibilities: event.target.responsibilities.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value
        })
    }

  return (
    <div>
        <h1>Previous Experience:</h1>
        <form onSubmit={onSubmit}>
            <label>Company name: </label>
            {edit ? <input type="text" name="companyName" defaultValue={information.companyName}></input> : <label>{information.companyName}</label>}
            <label>Position: </label>
            {edit ? <input type="text" name="position" defaultValue={information.position}></input> : <label>{information.position}</label>}
            <label>responsibilities: </label>
            {edit ? <input type="text" name="responsibilities" defaultValue={information.responsibilities}></input> : <label>{information.responsibilities}</label>}
            <label>Start of working period: </label>
            {edit ? <input type="date" name="startDate" defaultValue={information.startDate}></input> : <label>{information.startDate}</label>}
            <label>End of working period: </label>
            {edit ? <input type="date" name="endDate" defaultValue={information.endDate}></input> : <label>{information.endDate}</label>}
            <button type="submit"> {edit ? "submit" : "edit" } </button>
        </form>
    </div>
  )
}
  
  export default Practical