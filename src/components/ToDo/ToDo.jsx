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

    const [tasks, setTasks] = useState([]);
    const [form, setForm] = useState({
        formTask: "",
    });

    // Form Controlado
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    /* Opcion Form No Controlado
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new window.FormData(e.target));
        console.log(formData);

    }
    */

    const handleAdd = (e) => {
        e.preventDefault();
        setTasks([...tasks, form.formTask]);
        setForm({
            formTask: "",
        });
    }

  return (
    <div>
        <h1>To Do List</h1>

        <section>
            <h2>List</h2>
            <div>
                <ul>
                {tasks.map((task) => {
                    return (
                        <Task task={task} />
                    );
                })}
                </ul>
            </div>

        </section>

        <section>
            <form name="form">
                <input type="text" name="formTask" id="formTask" onChange={handleChange} value={form.formTask} />
                <button onClick={handleAdd}>Add</button>
            </form>
        </section>
    </div>
  )
}

export default ToDo