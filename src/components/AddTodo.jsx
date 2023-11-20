/* eslint-disable react/prop-types */
import{useState} from 'react'
import PopUp from "../UI/PopUp";


const AddTodo = ({ popUpSwitchOff, saveTasks }) => {
    const[taskValue,setTaskValue] = useState('')
    const[descriptionValue,setDescriptionValue] = useState('')

let onChangeTaskValue=(e)=>{
    setTaskValue(e.target.value)
}
let onChangeDescritionValue=(e)=>{
    setDescriptionValue(e.target.value)
}
let saveTaskValue = (e) =>{
    e.preventDefault();
    let newObj={
        task:taskValue,
        description:descriptionValue,
    }
     saveTasks(newObj);
popUpSwitchOff()
}

  return (
    <PopUp>
      <div className="card-top">
      <h2>Add a Task</h2>
      <i onClick={popUpSwitchOff} className="close-btn fa-solid fa-x fa-2xl"></i>
      </div>
      <form onSubmit={saveTaskValue} action="/">
      <label htmlFor="task">Title</label>
        <input placeholder="e.g, study for the test" type="text" name="title" id='task'  onChange={onChangeTaskValue} />
        <label htmlFor="description">Description</label>
        <textarea placeholder="e.g, study for the test" name="description" onChange={onChangeDescritionValue}  id="description" cols="30" rows="10"></textarea>
        <div className="checkbox-wrapper">
        
          <input
            type="checkbox"
            id="important"
            name="important"
            value="important"
          />
          <label htmlFor="important"> Mark as important</label>
        </div>
        <button type="submit" className="add">
          Add
        </button>
      </form>
    </PopUp>
  );
};

export default AddTodo;
