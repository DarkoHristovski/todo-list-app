/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "../UI/Card";
import EditTodo from "./EditTodo";

const TodoItem = ({ content, deleteTask, editTask, setTodo, popUpSwitchOff }) => {
  const [editPopUp, setEditPopUp] = useState(false);
  const [completed, setCompleted] = useState(content.completed);
  const [important, setImportant] = useState(content.important);

  const completedHandler = (e) => {
    setCompleted((state) => !state);

    let newObj = {
      ...content,
      completed: completed,
    };
    editTask(content.id, newObj);
  };

  const importantHandler = (e) =>{
    e.preventDefault;
    setImportant((state) => !state)
    let newObj = {
        ...content,
        important:important
    }
    editTask(content.id, newObj);
  }

  

  const deleteHandler = (taskId) => {
    deleteTask(taskId);
  };

  const openEditPopUp = (obj) => {
    setEditPopUp(true);
  };



  return (
    <Card>
      {editPopUp && (
        <EditTodo
        popUpSwitchOff={popUpSwitchOff}
          setEditPopUp={setEditPopUp}
          editTask={editTask}
          content={content}
        />
      )}
      <div className="todo-item">
        <h3>{content.task}</h3>
        <p>{content.description}</p>
        <p>{content.dueDate}</p>
        <div className="todo-bottom">
          <button
            onClick={completedHandler}
            className={
              completed ? "complete complete-btn" : "not-complete complete-btn"
            }
          >
            {completed ? "Completed" : "Uncompleted"}
          </button>
          <div className="btn-wrapper">
            <button onClick={importantHandler} className={important ? 'import-active' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" fill="transparent" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 fill-rose-500 stroke-rose-500 "><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
            </button>
            <button onClick={() => openEditPopUp(content)}>
              <i className="fa-regular fa-pen-to-square fa-2xl"></i>
            </button>
            <button onClick={() => deleteHandler(content.id)}>
              <i className="fa-solid fa-trash-can fa-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TodoItem;
