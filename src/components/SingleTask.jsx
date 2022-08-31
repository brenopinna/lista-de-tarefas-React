import { React } from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';

import './SingleTask.css'

const SingleTask = ({ task, handleTaskRemotion, handleTaskClick }) => {
   const taskId = task.id;
   const taskTitle = task.title;
   const taskCompleted = task.completed;

   const navigate = useNavigate();

   const handleInfoClick = (taskTitle) => {
      navigate(`/${taskTitle}`)
   }

   return (
      <div
         style={taskCompleted ? {borderLeft: '8px solid chartreuse'} : {}}
         className="single-task"
      >
         <p
         onClick={() => handleTaskClick(taskId)}
         className='title'>{taskTitle}</p>
         <div className="buttons">
            <CgInfo onClick={() => handleInfoClick(taskTitle)} />
            <CgClose onClick={() => handleTaskRemotion(taskId)} />
         </div>
      </div>
   );
}

export default SingleTask;
