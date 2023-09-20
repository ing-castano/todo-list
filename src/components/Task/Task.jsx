import React from 'react'

const Task = ({id, title, completed, handleDelete, handleEdit}) => {
  return (
    <div
    style = {{
        display: "flex",
        width: "300px",
        justifyContent: "space-between",
        border: "1px solid white",
        alignItems: "center",
        borderRadius: "5px",
        padding: "5px",
        margin: "10px",
        listStyle: "none",
    }}
    >
        <input type="checkbox" name="checkbox" id="" />
        <li>{title}</li>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}                    
        >
            <button onClick={() => {handleDelete(id)}}>Delete</button>
            <button onClick={() => {handleEdit(id)}}>Edit</button>
        </div>
    </div>
  )
}

export default Task