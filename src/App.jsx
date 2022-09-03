import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Header from './components/Global/Header';
import AddTask from './components/Home/AddTask';
import SingleTask from './components/Home/SingleTask';
import TaskDetails from './components/Details/TaskDetails';

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
      <div className={className}>
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
                        tasks={tasks}
                        key={task.id}
                        setTasks={setTasks}
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

const StyledApp = styled(App)`
  border: 2px solid chartreuse;
  margin: 30px auto;
  width: 100%;
  max-width: 500px;
  min-height: 300px;
  border-radius: 10px;
  padding: 30px;

  .tasks-container{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export default StyledApp;