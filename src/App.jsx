/* eslint-disable no-unused-vars */
import { useState } from "react";
import { todos } from "./todo.json";
import Main from "./components/Main";
import Aside from "./components/Aside";
import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
  const [todo, setTodo] = useState(todos);
  const [popUp, setPopUp] = useState(false);
  const [filterImportantTodo, setFilterImportantTodo] = useState(todo);

  let popUpSwitchOff = () => {
    setPopUp(false);
  };
  let popUpSwitchOn = () => {
    setPopUp(true);
  };

  
    let importFilter = todo.filter(x=>x.important);
  
  
  

  let saveTasks = (obj) => {
    setTodo((state) => [...state, obj]);
  };

  const deleteTask = (id) => {
    setTodo((state) => state.filter((x) => id !== x.id));
  };

  const editTask = (taskId, taskData)=>{
    setTodo(state=>state.map(x=> x.id===taskId ? taskData : x ))
    console.log(todo)
  }

  return (
    <div className="project-wrapper">
      {popUp && (
        <AddTodo saveTasks={saveTasks} popUpSwitchOff={popUpSwitchOff} />
      )}
      <Aside  popUpSwitchOff={popUpSwitchOff} popUpSwitchOn={popUpSwitchOn} />
      <Main importFilter={importFilter} editTask={editTask} popUpSwitchOn={popUpSwitchOn} deleteTask={deleteTask} todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
