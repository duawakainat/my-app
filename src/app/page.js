'use client'
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList/page';
import TodoForm from './TodoForm/page';
import './globals.css'
const Home = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className=''>
      <h1>Todo App</h1>
      <TodoForm className='inpot border-4 border-indigo-500/75' onAdd={addTodo} />
      <TodoList className='w-[56]' todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} onEdit={editTodo} />
    </div>
  );
};

export default Home;
