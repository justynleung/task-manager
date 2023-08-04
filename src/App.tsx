// Components
import Task from "./assets/task";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
// Hooks
import { useState, useEffect } from 'react';

export default function App() {
  // Set to empty array if local storage return null
  const [tasks, setTasks] = (useState<Task[]>(() => {
    return JSON.parse(localStorage.getItem('tasks')!) || []
  }));
  // Save to local storage everytime tasks is updated - useEffect
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <main className="w-screen h-min">
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  )
}
