import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, className }) => {
   return (
      <button className={className} onClick={onClick}>{children}</button>
   );
}

const styledButton = styled(Button)`
   cursor: pointer;
   width: 100%;
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

export default styledButton;