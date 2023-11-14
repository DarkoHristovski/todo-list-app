import { useState } from 'react'
import {todos} from './todo.json'
import Main from './components/Main'
import Aside from './components/Aside'
import './App.css'

function App() {
  const [todo, setTodo] = useState(todos)

  return (
    <div className='project-wrapper'>
    <Main todo={todo} />
    <Aside/>
    </div>
  )
}

export default App
