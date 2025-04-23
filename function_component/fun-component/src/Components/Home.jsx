import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({
        id: null,
        title: '',
        description: '',
        completed: false
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/')
            .then(response => setTasks(response.data))
            .catch(error => console.log(error));
    }, []);

    const editTask = (task) => {
        setEditing(true);
        setCurrentTask(task);
    };

    const updateTask = (id, updatedTask) => {
        axios.put(`http://127.0.0.1:8000/api/tasks/${id}/`, updatedTask)
            .then(response => {
                setTasks(tasks.map(t => (t.id === id ? response.data : t)));
                setEditing(false);
            })
            .catch(error => console.log(error));
    };



    return (
        <div>
            <Nav />
                
            <h1>Todo</h1>
            {editing && (
                <EditTASKForm
                    currentTask={currentTask}
                    updateTask={updateTask}
                />
            )}
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>status</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'Completed' : 'Not completed'}</td>
                            <td>
                                <button onClick={() => editTask(todo)}>Edit</button>
                                {/* Placeholder for delete button */}
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Reusable form component for editing
const EditTASKForm = ({ currentTask, updateTask }) => {
    const [task, setTask] = useState(currentTask);

    useEffect(() => {
        setTask(currentTask);
    }, [currentTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(task.id, task);
    };

    return (
        <div>
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                Title
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    className="form-control"
                />
                Description
                <input
                    type="text"
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    className="form-control"
                />
                <button type="submit" className="btn btn-success">Update</button>
                <button ></button>
            </form>
        </div>
    );
};
