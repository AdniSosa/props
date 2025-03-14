import { useState } from 'react';
import './App.css'
import Task from './components/Task'
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  const [newTask, setNewTask] = useState({text: ''});
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (inputValue) => {

    if(inputValue) {
        const copyTask = newTask;
        copyTask.text = inputValue;
        copyTask.id = tasks.length + 1;
        copyTask.completed = false;
        
        setTasks([...tasks, copyTask])
        setNewTask({text: ''})
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const completedTask = (taskId) => {
    const copyTasks = [...tasks];
    const filteredTask = copyTasks.filter(task => task.id === taskId);
    //console.log(filteredTask[0])
   
    filteredTask[0].completed = !filteredTask[0].completed;
    setTasks(copyTasks);
    //console.log(copyTasks)
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={addTask} />
        <ul>
          {tasks.map(task => (
            <Task key={task.id} task={task} deleteTask= {deleteTask} completedTask={completedTask}/>
          ))}
      </ul>
      
    </>
  );
};

export default App;
