/* eslint-disable react/prop-types */
import { useState } from "react";
import PopUp from "../UI/PopUp";
import { v4 } from "uuid";

const AddTodo = ({ popUpSwitchOff, saveTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [important, setIsImportant] = useState(true);
  const [dateValue, setDateValue] = useState(new Date());

  let id = v4();
  let date = new Date();
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();
  let nextYear = date.getFullYear() + 1;
  let today = `${dd}.${mm}.${yyyy}`;
  let nextYearDate = `${dd}.${mm}.${nextYear}`;

  let [year, month, day] = dateValue.toString().split("-");
  let pickedDate = `${day}.${month}.${year}`;

  let onChangeTaskValue = (e) => {
    setTaskValue(e.target.value);
  };

  let onChangeImportant = () =>{
    setIsImportant(state=>!state)
    {console.log(important)}
  }

  let onChangeData = (e) => {
    setDateValue(e.target.value);
    console.log(dateValue);
  };

  let onChangeDescritionValue = (e) => {
    setDescriptionValue(e.target.value);
  };

  let saveTaskValue = (e) => {
    e.preventDefault();
    let newObj = {
      id: id,
      task: taskValue,
      description: descriptionValue,
      date: pickedDate,
      completed: false,
      important: important,
    };
    saveTasks(newObj);
    popUpSwitchOff();
  };

  return (
    <PopUp>
      <div className="card-top">
        <h2>Add a Task</h2>
        <i
          onClick={popUpSwitchOff}
          className="close-btn fa-solid fa-x fa-l"
        ></i>
      </div>
      <form onSubmit={saveTaskValue} action="/">
        <label htmlFor="task">Title</label>
        <input
          placeholder="e.g, study for the test"
          type="text"
          name="title"
          id="task"
          onChange={onChangeTaskValue}
        />
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="e.g, study for the test"
          name="description"
          onChange={onChangeDescritionValue}
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="date">Date</label>
        <input
        required
          type="date"
          onChange={onChangeData}
          min={today}
          data-date-format="DD-MM-YYYY"
          max={nextYearDate}
          value={dateValue}
        ></input>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="important"
            name="important"
            checked={important}
            onChange={onChangeImportant}
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
