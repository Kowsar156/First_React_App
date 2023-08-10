import React, { useState } from 'react'

export const AddTodo = (props) => {

    let myStyle = {
        minHeight: "80vh",
        margin: "40px auto"
    }

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!title || !description){
            alert("Title or Description cannot be blank");
        }
        else{
            props.addTodoList(title, description);
            setTitle("");
            setDescription("");
        }
    }

    return (
        <div className='container my-3' style={myStyle}>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">Type only the title</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Todo Description</label>
                    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="form-control" id="description"/>
                </div>
                <button type="submit" className="btn btn-outline-primary">Add Todo</button>
            </form>
        </div>
    )
}
