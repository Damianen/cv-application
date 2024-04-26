import { useState } from "react";

function Education() {
    const [edit, setEdit] = useState(true);
    const [information, setInformation] = useState({
        schoolName: "",
        title: "",
        date: ""
    });

    function onSubmit(event) {
        event.preventDefault();
        setEdit(!edit);
        setInformation({
            ...information,
            schoolName: event.target.schoolName.value,
            title: event.target.title.value,
            date: event.target.date.value
        })
    }

  return (
    <div>
        <h1>Education information:</h1>
        <form onSubmit={onSubmit}>
            <label>school name: </label>
            {edit ? <input type="text" name="schoolName" defaultValue={information.schoolName}></input> : <label>{information.schoolName}</label>}
            <label>title of study: </label>
            {edit ? <input type="text" name="title" defaultValue={information.title}></input> : <label>{information.title}</label>}
            <label>date of study: </label>
            {edit ? <input type="date" name="date" defaultValue={information.date}></input> : <label>{information.date}</label>}
            <button type="submit"> {edit ? "submit" : "edit" } </button>
        </form>
    </div>
  )
}
  
  export default Education