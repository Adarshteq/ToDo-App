import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";  // Fixed typo in icon name
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: "",
        });
    };

    // Render TodoForm if in edit mode
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo) => (  // Removed unused `index`
        <div
            key={todo.id}  // Moved key here (fixes React warning)
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
        >
            <div onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="edit-icon"
                />
            </div>
        </div>
    ));
};

export default Todo;