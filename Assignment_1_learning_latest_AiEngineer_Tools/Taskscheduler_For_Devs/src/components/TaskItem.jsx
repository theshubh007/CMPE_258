import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ task, updateTask, deleteTask }) {
  const handleCompleteToggle = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li className="mb-4 py-3 px-5 rounded-lg shadow-md flex items-center justify-between bg-white dark:bg-teal-primary">
      <div>
        <input
          type="checkbox"
          id={`task-${task.id}`}
          className="mr-2 leading-tight"
          checked={task.completed}
          onChange={handleCompleteToggle}
        />
        <label htmlFor={`task-${task.id}`} className={`text-gray-800 text-sm ${task.completed ? 'line-through' : ''} dark:text-dark-text`}>
          {task.title} - {task.priority}
        </label>
      </div>
      <div>
        <button onClick={handleCompleteToggle} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline mr-2">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
