import React from 'react'
import { useState } from 'react'
import Task from '../Task/Task';
import Form from '../Form/Form';

/* Comentarios Profe
// estado = tareas[] -> deberiamos tener en un estado un array de tareas
// estado = form {} -> si lo decidimos hacer controlado 
// el boton Add deberia referenciar a un evento de tipo submit (para agregar tareas)


    [].map((tarea) => {
        return (
            <div>
                cosas
            </div>
        )
    }) 
*/


const ToDo = () => {

    // Manejo de Tareas
    const [tasks, setTasks] = useState([]);

    const createNewTask = (title) => ({
        id: window.crypto.randomUUID(),
        title: title,
        completed: false,
    });

    const addTask = (form) => {
        const newTask = createNewTask(form.title);
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) => (
       tasks.filter((task) => {
            return task.id !== id
       }));
   

    const handleDelete = (id) => {
        const newTasks = deleteTask(id);
        setTasks(newTasks);
    }

    const handleEdit = (id) => {
        console.log("llegue al handle edit", id)
        const editTask = tasks.find((task)=>{
            return task.id === id
        });
        
        console.log(editTask);
        //const newTasks = deleteTask(id);
        //setTasks([...]);
    }

    
  return (
    <div>
        <h1>To Do List</h1>

        <Form 
            onSubmitted = {(form) => {addTask(form)}}
        />

        <section>
            <h2>List</h2>
            <div>
                <ul>
                {tasks.map((task) => {
                    return (
                        <Task 
                            key={task.id} 
                            id={task.id} 
                            title={task.title} 
                            completed={task.completed} 
                            handleDelete={handleDelete} 
                            handleEdit={handleEdit} />
                    );
                })}
                </ul>
            </div>

        </section>
    </div>
  )
}

export default ToDo