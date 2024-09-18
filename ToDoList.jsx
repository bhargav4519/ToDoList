import React, { useState } from 'react';
import './ToDoList.css';  // Import the CSS file

const initialTasks = [
  { id: 1, time: '6:00 AM - 6:30 AM', task: 'Wake Up & Morning Routine', completed: false },
  { id: 2, time: '7:00 AM - 8:00 AM', task: 'Deep Work Session', completed: false },
  { id: 3, time: '8:00 AM - 8:15 AM', task: 'Short Break', completed: false },
  { id: 4, time: '8:15 AM - 10:00 AM', task: 'Technical Learning', completed: false },
  { id: 5, time: '10:00 AM - 10:15 AM', task: 'Short Break', completed: false },
  { id: 6, time: '10:15 AM - 12:00 PM', task: 'Project Work', completed: false },
  { id: 7, time: '12:00 PM - 1:00 PM', task: 'Lunch Break', completed: false },
  { id: 8, time: '1:00 PM - 2:30 PM', task: 'Collaborative Work', completed: false },
  { id: 9, time: '2:30 PM - 2:45 PM', task: 'Short Break', completed: false },
  { id: 10, time: '2:45 PM - 4:00 PM', task: 'Continued Project Work', completed: false },
  { id: 11, time: '4:00 PM - 4:15 PM', task: 'Short Break', completed: false },
  { id: 12, time: '4:15 PM - 5:30 PM', task: 'Skill Development', completed: false },
  { id: 13, time: '5:30 PM - 6:00 PM', task: 'Wrap-Up & Review', completed: false },
  { id: 14, time: '6:00 PM - 7:00 PM', task: 'Dinner', completed: false },
  { id: 15, time: '7:00 PM - 8:00 PM', task: 'Personal Time/Relaxation', completed: false },
  { id: 16, time: '8:00 PM - 9:00 PM', task: 'Review & Reflection', completed: false },
  { id: 17, time: '9:00 PM - 9:30 PM', task: 'Wind Down', completed: false },
  { id: 18, time: '9:30 PM - 10:00 PM', task: 'Prepare for Bed', completed: false }
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showCompleted, setShowCompleted] = useState(true);
  const [showPending, setShowPending] = useState(true);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (showCompleted && task.completed) return true;
    if (showPending && !task.completed) return true;
    return false;
  });

  return (
    <div className="todo-list-container">
      <h1>Daily To-Do List</h1>
      <div className="checkbox-controls">
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          Show Completed Tasks
        </label>
        <label>
          <input
            type="checkbox"
            checked={showPending}
            onChange={() => setShowPending(!showPending)}
          />
          Show Pending Tasks
        </label>
      </div>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Task</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map(task => (
            <tr key={task.id} className={task.completed ? 'completed' : ''}>
              <td>{task.time}</td>
              <td>{task.task}</td>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
