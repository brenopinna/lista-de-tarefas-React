import styled from 'styled-components';

export const AppContainer = styled.div`
   border: 2px solid chartreuse;
   margin: 30px auto;
   width: 100%;
   max-width: 500px;
   min-height: 300px;
   border-radius: 10px;
   padding: 30px;
`;
export const Title = styled.h1`
   color: #eee;
`;

export const Button = styled.button`
   cursor: pointer;
   background-color: chartreuse;
   border: none;
   height: 40px;
   border-radius: 5px;
   color: #444;
   padding: 0 10px;
   font-weight: bold;
   font-size: 16px;
   transition: 0.4s;

   &:hover{
      color: chartreuse;
      background-color: #444;
   }
`;