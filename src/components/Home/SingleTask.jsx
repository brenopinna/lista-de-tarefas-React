import { React } from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SingleTask = ({ task, tasks, setTasks , className }) => {
   const taskId = task.id;
   const taskTitle = task.title;
   const taskCompleted = task.completed;

   const navigate = useNavigate();

   const handleInfoClick = (taskTitle) => {
      navigate(`/${taskTitle}`)
   }

   const handleTaskClick = taskId => {
      const newTasks = tasks.map(task => {
         if(task.id === taskId) return {...task, completed: !task.completed}
         return task;
      })
      setTasks(newTasks);
   }

   const handleTaskRemotion = taskId => {
      const newTasks = tasks.filter(task => task.id !== taskId);
      setTasks([...newTasks]);
   }

   return (
      <div
         style={taskCompleted ? {borderLeft: '8px solid chartreuse'} : {}}
         className={className}
      >
         <p
         onClick={() => handleTaskClick(taskId)}
         className='task-title'>{taskTitle}</p>
         <div className="buttons">
            <CgInfo onClick={() => handleInfoClick(taskTitle)} />
            <CgClose onClick={() => handleTaskRemotion(taskId)} />
         </div>
      </div>
   );
}

const StyledSingleTask = styled(SingleTask)`
   background-color: #444;
   color: #eee;
   border-radius: 5px;
   display: flex;
   align-items: center;
   gap: 8px;
   justify-content: space-between;
   padding: 0 20px;
   height: 60px;

   .task-title{
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
   }

   .buttons{
      font-size: 24px;
      display: flex;
      gap: 12px;
      color: chartreuse;
   }

   .buttons *{cursor: pointer;}
`;

export default StyledSingleTask;
