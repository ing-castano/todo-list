import React from 'react'

const Task = ({task}) => {
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
        <input type="checkbox" name="" id="" />
        <li>{task}</li>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}                    
        >
            <button>Delete</button>
            <button>Edit</button>
        </div>
    </div>
  )
}

export default Task