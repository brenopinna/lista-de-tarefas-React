import React from 'react';
import AddTask from './AddTask/index'
import { TasksContainer } from './TasksContainer/styles';
import SingleTask from './SingleTask/index'

const Home = ({ tasks, setTasks, handleTaskAddition }) => {
   return (
      <>
         <AddTask handleTaskAddition={handleTaskAddition} />
         <TasksContainer>
            {tasks.map(task => {
               return (
                  <SingleTask
                  task={task}
                  tasks={tasks}
                  key={task.id}
                  setTasks={setTasks}
               />);
            })}
         </TasksContainer>
      </>
   );
}

export default Home;