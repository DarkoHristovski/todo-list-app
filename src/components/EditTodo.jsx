/* eslint-disable react/prop-types */
import { useState } from "react";
import PopUp from "../UI/PopUp";

const EditTodo = ({content, editTask,setEditPopUp}) => {
    const[value,setValue] = useState({
      task:content.task,
      description:content.description,
    })

let onChangeValue=(e)=>{
  e.preventDefault();
  setValue((state)=>({
    ...state,
    [e.target.name]:e.target.value,
  }))
}

  const EditTaskHandler = (e) => {
    e.preventDefault();
    let newObj = {
    id:content.id,
      ...value
    };
    editTask(content.id, newObj);
    setEditPopUp(false)
  };
  return (
    <PopUp>
      
      <button type="button" className="add">
        Cancel
      </button>
      <h2>Edit a Task</h2>
      <form onSubmit={EditTaskHandler} action="/">
        <input
          type="text"
          name="task"
          id='task'
          defaultValue={value.task}
          onChange={onChangeValue}
        />
        <textarea
          name="description"
          defaultValue={value.description}
          onChange={onChangeValue}
          id="description"
          cols="30"
          rows="10"
        ></textarea>
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

export default EditTodo;
