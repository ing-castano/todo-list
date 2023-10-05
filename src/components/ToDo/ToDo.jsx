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
        edited: false,
    });

    const addTask = (form) => {
        const newTask = createNewTask(form.title);
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) => {
       const newTasks = tasks.filter((task) => {
            return task.id !== id
       });
       setTasks(newTasks);
    };
   
    const editTask = (id) => {
        const draftTasks = structuredClone(tasks);
        const draftTask = draftTasks.find((task) => task.id === id);
        draftTask.edited = true;
        setTasks(draftTasks);  
    }

    const modifyTask = (id, text) => {
        const draftTasks = structuredClone(tasks);
        const draftTask = draftTasks.find((task) => task.id === id);
        draftTask.edited = false;
        draftTask.title = text;
        setTasks(draftTasks);  
    }

    const completedTask = (id) => {
        const draftTasks = structuredClone(tasks);
        const draftTask = draftTasks.find((task) => task.id === id);
        draftTask.completed = !draftTask.completed;
        setTasks(draftTasks);    
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
                            onDeleted = {(id) => {deleteTask(id)}}
                            completedTask = {completedTask}
                            editTask={editTask}
                            modifyTask={modifyTask}
                            edited={task.edited} />
                    );
                })}
                </ul>
            </div>

        </section>
    </div>
  )
}

export default ToDo