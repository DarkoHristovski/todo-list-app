/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';
import ImportantToDo from './ImportantTodo';
import { Routes, Route } from 'react-router-dom'

const Main = ({todo, deleteTask,setEditPopUp,editTask, setTodo,importFilter}) =>{
  return ( 
  <main className="main">
    <Routes>
    <Route path="/" element={todo.map(x=> <TodoItem editTask={editTask} setEditPopUp={setEditPopUp} deleteTask={deleteTask} setTodo={setTodo} key={x.id} content={x}/>)}/>
    <Route path="/important" element={importFilter.map(x=> <ImportantToDo editTask={editTask} setEditPopUp={setEditPopUp} deleteTask={deleteTask} setTodo={setTodo} key={x.id} content={x}/>)}/>
    <Route path="/completed" element={todo.map(x=> <TodoItem editTask={editTask} setEditPopUp={setEditPopUp} deleteTask={deleteTask} setTodo={setTodo} key={x.id} content={x}/>)}/>
   </Routes> 
   </main>  
   )
}

export default  Main