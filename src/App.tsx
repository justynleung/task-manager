// Components
import Task from "./assets/task";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
// Hooks
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = (useState<Task[]>([]))
  return (
    <main className="w-screen h-min">
      <TaskForm tasks={tasks} setTasks={() => setTasks} />
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App;