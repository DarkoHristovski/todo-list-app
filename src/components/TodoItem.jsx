const TodoItem = ({content})=>{
    
    return(
        <div className="todo-item">
         <h3>{content.task}</h3>
         <p>{content.description}</p>
         <p>{content.dueDate}</p>
        </div>
    )
}

export default TodoItem;