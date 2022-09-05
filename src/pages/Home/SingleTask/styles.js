import styled from 'styled-components';

export const SingleTaskContainer = styled.div`
   background-color: #444;
   color: #eee;
   border-radius: 5px;
   display: flex;
   align-items: center;
   gap: 8px;
   justify-content: space-between;
   padding: 0 20px;
   height: 60px;
`;

export const TaskTitle = styled.p`
   cursor: pointer;
   display: flex;
   align-items: center;
   height: 100%;
   width: 100%;
`;

export const Buttons = styled.div`
   font-size: 24px;
   display: flex;
   gap: 12px;
   color: chartreuse;

   & *{cursor: pointer;}
`;