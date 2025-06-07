import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);  // Fixed: Removed space between 'set' and 'Todos'

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  
  const updateTodo = (todoId, newValue) => {  // Fixed: Changed 'newvalue' to 'newValue' for consistency
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));  // Fixed: Removed extra '='
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter(todo => todo.id !== id);  // Fixed: Changed '=.' to '=>'
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
        todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo} 
      />
    </>
  );
};

export default TodoList;