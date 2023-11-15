import TodoItem from './TodoItem';

const Main = ({todo}) =>{
  return ( 
  <main className="main">
  {todo.map(x=> <TodoItem key={x.id} content={x}/>)}
   </main>)
}

export default  Main