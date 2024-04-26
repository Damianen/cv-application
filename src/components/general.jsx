import { useState } from "react";

function General() {
    const [edit, setEdit] = useState(true);
    const [information, setInformation] = useState({
        name: "",
        email: "",
        phone: ""
    });

    function onSubmit(event) {
        event.preventDefault();
        setEdit(!edit);
        setInformation({
            ...information,
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value
        })
    }

  return (
    <div>
        <h1>General information:</h1>
        <form onSubmit={onSubmit}>
            <label>name: </label>
            {edit ? <input type="text" name="name" defaultValue={information.name}></input> : <label>{information.name}</label>}
            <label>email: </label>
            {edit ? <input type="email" name="email" defaultValue={information.email}></input> : <label>{information.email}</label>}
            <label>phone number: </label>
            {edit ? <input type="tel" name="phone" defaultValue={information.phone}></input> : <label>{information.phone}</label>}
            <button type="submit"> {edit ? "submit" : "edit" } </button>
        </form>
    </div>
  )
}

export default General