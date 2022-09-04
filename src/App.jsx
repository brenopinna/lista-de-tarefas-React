import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContainer } from './Global/styles'
import axios from 'axios';

import Header from './Global/Header';
import Home from './components/Home/Home'
import TaskDetails from './components/Details/TaskDetails/TaskDetails';

import { useEffect } from 'react';

const App = ({ className }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      completed: false,
      title: 'Primeira Tarefa'
    }
  ])

  const handleTaskAddition = taskTitle => {
    setTasks([...tasks, {
      id: tasks.length > 0 ? (tasks.at(-1).id + 1) : 1,
      completed: false,
      title: taskTitle
    }])
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