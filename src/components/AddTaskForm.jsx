import { useState } from "react";
import styles from './AddTaskForm.module.css'

const AddTaskForm = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.Form}>
                <input
                    type="text"
                    name='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" onClick={() => addTask(inputValue)}>Agregar</button>
                {console.log(inputValue)}
            </form>
        </>
    )
}

export default AddTaskForm;