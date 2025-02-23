import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No tasks yet. Add one!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
