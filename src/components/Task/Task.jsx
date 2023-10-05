import React from 'react'

const Task = ({id, title, completed, onDeleted = (id) => {}, completedTask, editTask, modifyTask, edited}) => {

    if (edited == false)
    {
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
                <input type="checkbox" name="checkbox" id={id} onChange={() => {completedTask(id)}}/>
                <li>{completed ? <strike>{title}</strike> : title}</li>
                <div
                    style={{
                        
                        display: "flex",
                        flexDirection: "column",
                    }}                    
                >
                    <button onClick={() => {onDeleted(id)}}>Delete</button>
                    <button onClick={() => {editTask(id);}}>Edit</button>
                </div>
            </div>
        )
    }
    else
    {

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
                <input type="checkbox" name="checkbox" id={id} onChange={() => {completedTask(id)}}/>
                <input type="text" name="taskTitle" id="taskTitle" defaultValue={title}/>
                <div
                    style={{
                        
                        display: "flex",
                        flexDirection: "column",
                    }}                    
                >
                    <button onClick={() => {onDeleted(id)}}>Delete</button>
                    <button onClick={() => {modifyTask(id, document.getElementById("taskTitle").value)}}>Save</button>
                </div>
            </div>
        )
    }
}

export default Task