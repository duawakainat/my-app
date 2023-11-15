'use client'
import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editedText);
    }
    setEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'complate' : 'Edit'}</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onToggle(todo.id)}>Toggle</button>
    </div>
  );
};

export default TodoItem;
