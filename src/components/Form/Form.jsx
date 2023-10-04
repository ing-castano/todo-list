import React from 'react'
import { useState } from 'react'

const Form = ({onSubmitted = (form) => {}}) => {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
        onSubmitted(form); // Funcion callback . Como tengo una funcion de tipo (form) => { callback(form) }, puedo acceder al form desde la funcion anonima que en este caso se asignó a onSubmitted y que es justamente lo que hago en el archivo ToDo.jsx (archivo Padre). De esta forma, tengo lo que dice el form en el Padre sin editar el estado Tasks en el Form (componente Hijo).
    }

    return (
        <section>
            <form name="form" onSubmit={handleSubmit}>
                <input type="text" name="title" id="formTitle" onChange={handleChange} value={form.title} />
                <button type="submit">Add</button>
            </form>
        </section>
    )
}

export default Form