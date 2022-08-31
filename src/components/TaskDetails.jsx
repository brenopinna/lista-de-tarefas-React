import { React } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
   const { taskTitle } = useParams();
   const navigate = useNavigate();
   return (
      <>
         <div className="back-button-container">
            <Button onClick={() => navigate('../')}>Voltar</Button>
         </div>
         <div className="details-container">
            <h2 className="title">{taskTitle}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque voluptate libero accusantium exercitationem! Rerum.</p>
         </div>
      </>
   );
}

export default TaskDetails;