import { React } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../Global/styles'

const TaskDetails = ({ className }) => {
   const { taskTitle } = useParams();
   const navigate = useNavigate();
   return (
      <div className={className}>
         <div className="back-button-container">
            <Button onClick={() => navigate('../')}>Voltar</Button>
         </div>
         <div className="details-container">
            <h2 className="title">{taskTitle}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque voluptate libero accusantium exercitationem! Rerum.</p>
         </div>
      </div>
   );
}

const StyledTaskDetails = styled(TaskDetails)`
   .back-button-container{
      margin-top: 10px;
      width: 130px;
      height: 40px;
   }

   .details-container{
      background-color: #444;
      border-radius: 5px;
      margin-top: 15px;
      padding: 15px 20px;
   }

   .details-container .title{
      color: chartreuse;
   }

   .details-container p{
      margin-top: 5px;
      color: #eee;
   }
`;

export default StyledTaskDetails;