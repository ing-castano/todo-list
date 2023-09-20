import React from 'react'
import { useState } from 'react'
import Task from '../Task/Task';

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

    const deleteTask = (id) => (
       tasks.filter((task) => {
            return task.id !== id
       }));
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = createNewTask(form.title);
        setTasks([...tasks, newTask]);
        resetForm();
    }

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

    // Manejo del Form
    const [form, setForm] = useState({
        title: "",
    });

    const resetForm = () => {
        setForm({
            title: "",
        });
    }

    const handleChange = (e) => {
        // Form Controlado
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value,
        });
    }

    /* Opcion Form No Controlado
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new window.FormData(e.target));
        console.log(formData);

    }
    */


  return (
    <div>
        <h1>To Do List</h1>

        <section>
            <form name="form" onSubmit={handleSubmit}>
                <input type="text" name="title" id="formTitle" onChange={handleChange} value={form.title} />
                <button type="submit">Add</button>
            </form>
        </section>

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