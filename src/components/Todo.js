import React, { useState } from 'react';
import '../Todo.css';
import CreateTask from './CreateTask';

function Task({ task, index, completeTask, removeTask }) {
    return (
        <div className="task" style={{ textDecoration: task.completed ? "line-through" : "" }} >
            {task.title}
            <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            <button onClick={() => completeTask(index)} >Complete</button>
        </div>
    );
}

function Todo() {
    const [tasks, setTasks] = useState([]);

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const [search, setSearch] = useState('');
    const filtered = !search
    ? tasks
    : tasks.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="todo-container">
            <div className="header">TODO - LIST</div>
            <CreateTask addTask={addTask} />
            <input type="text" className="inputBox" value={search} placeholder="Search Todo" onChange={(e) => setSearch(e.target.value)} />

            <div className="tasks">
                {filtered.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default Todo;