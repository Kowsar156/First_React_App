import React from 'react'

export const TodoItem = (props) => {
  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <h4>{props.todo.title}</h4>
        <p>{props.todo.description}</p>
        <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}
