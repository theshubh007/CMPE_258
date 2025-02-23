import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;

    const newTask = {
      id: uuidv4(),
      title,
      description,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('low');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 rounded-lg shadow-md bg-white dark:bg-teal-primary">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 dark:text-dark-text">Title:</label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-teal-secondary dark:text-dark-text dark:border-gray-600"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2 dark:text-dark-text">Description:</label>
        <textarea
          id="description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-teal-secondary dark:text-dark-text dark:border-gray-600"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2 dark:text-dark-text">Priority:</label>
        <select
          id="priority"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-teal-secondary dark:text-dark-text dark:border-gray-600"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit" className="bg-accent-color hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
