import { useState } from "react";
import axios from "axios";

const FormCreationTask = ({ onCreateTask, onCloseForm }) => {
    const API_URL = process.env.REACT_APP_API_URL;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [due_date, setDueDate] = useState('');

    const createTask = async () => {
        const todo = { due_date, description, title };

        try {
            await axios.post(`${API_URL}/todos`, todo);

            onCreateTask();
        } catch (err) {
            console.error("Error: ", err);
        }
    };

    return (
        <form 
            onSubmit={() => createTask}
        >
               
        </form>
    );
}

export default FormCreationTask