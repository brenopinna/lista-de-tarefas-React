import { React } from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';
import { SingleTaskContainer, TaskTitle, Buttons } from './styles';

const SingleTask = ({ task, tasks, setTasks }) => {
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
      <SingleTaskContainer
         style={taskCompleted ? {borderLeft: '8px solid chartreuse'} : {}}
      >
         <TaskTitle onClick={() => handleTaskClick(taskId)}>
               {taskTitle}
         </TaskTitle>
         <Buttons>
            <CgInfo onClick={() => handleInfoClick(taskTitle)} />
            <CgClose onClick={() => handleTaskRemotion(taskId)} />
         </Buttons>
      </SingleTaskContainer>
   );
}

export default SingleTask;
