import { React } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { BackButton, DetailsContainer, DetailsTitle, DetailsText } from './styles'

const TaskDetails = () => {
   const { taskTitle } = useParams();
   const navigate = useNavigate();
   return (
      <>
         <BackButton onClick={() => navigate('../')}>Voltar</BackButton>
         <DetailsContainer>
            <DetailsTitle>{taskTitle}</DetailsTitle>
            <DetailsText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque voluptate libero accusantium exercitationem! Rerum.</DetailsText>
         </DetailsContainer>
      </>
   );
}

export default TaskDetails;