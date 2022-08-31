import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import AddTask from './components/AddTask';
import SingleTask from './components/SingleTask';
import TaskDetails from './components/TaskDetails';

import './App.css';
import { useEffect } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      completed: false,
      title: 'Primeira Tarefa'
    }
  ])

  const handleTaskClick = taskId => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task;
    })
    setTasks(newTasks);
  }

  const handleTaskAddition = taskTitle => {
    setTasks([...tasks, {
      id: tasks.length > 0 ? (tasks.at(-1).id + 1) : 1,
      completed: false,
      title: taskTitle
    }])
  }

  const handleTaskRemotion = taskId => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks([...newTasks]);
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
      setTasks(data);
    }

    fetchTasks();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition}/>
                <div className="tasks-container">
                  {tasks.map(task => {
                    return (
                      <SingleTask
                        task={task}
                        key={task.id}
                        handleTaskRemotion={handleTaskRemotion}
                        handleTaskClick={handleTaskClick}
                        />);
                        
                    }
                  )}
                </div>
              </>
            }
          />
          <Route
            path="/:taskTitle"
            element={<TaskDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;