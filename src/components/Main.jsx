import TodoItem from './TodoItem';

const Main = ({todo}) =>{
  return ( <div className="main">
  {todo.map(x=> <TodoItem key={x.id} content={x}/>)}
   </div>)
}

export default  Main