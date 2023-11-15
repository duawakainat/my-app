'use client'
import React, { useState, useEffect } from 'react';
import TodoForm from './component/TodoForm/page';
import TodoForm from './component/TodoForm/page';

const Home = () => {
  const initialTodos = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('todos')) || [] : [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
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
    <div>
      <h1>Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} onEdit={editTodo} />
    </div>
  );
};

export default Home;
