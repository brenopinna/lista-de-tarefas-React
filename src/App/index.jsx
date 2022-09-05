import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { AppContainer } from './styles'
import Header from '../components/Header/index';
import Home from '../pages/Home/index'
import TaskDetails from '../pages/Details/TaskDetails/index';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      completed: false,
      title: 'Primeira Tarefa'
    }
  ])

  const handleTaskAddition = taskTitle => {
    if(taskTitle.trim()){
      setTasks([...tasks, {
        id: tasks.length > 0 ? (tasks.at(-1).id + 1) : 1,
        completed: false,
        title: taskTitle
      }])
    }else{
      alert('Por favor, insira um valor válido.')
    }
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
      <AppContainer>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home 
                tasks={tasks}
                setTasks={setTasks}
                handleTaskAddition={handleTaskAddition}
              />
            }
          />
          <Route
            path="/:taskTitle"
            element={<TaskDetails />}
          />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;