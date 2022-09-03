import { React, useState } from 'react';
import styled from 'styled-components';

import Button from '../Global/Button';

const AddTask = ({ handleTaskAddition, className }) => {
   const [inputValue, setInputValue] = useState('');
   return (
      <div className={className}>
         <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className='input'
            type="text"
            placeholder='Sua Tarefa...'
         />
         <div className="button-container">
            <Button
               onClick={() => {
                  handleTaskAddition(inputValue);
                  setInputValue('')}
               }
            >
               Adicionar
            </Button>
         </div>
      </div>
   );
}

const StyledAddTask = styled(AddTask)`
   max-width: 100%;
   height: 40px;
   display: flex;
   gap: 8px;
   margin: 15px 0;

   .input{
      font-size: 16px;
      flex-grow: 2;
      color: #eee;
      background-color: #444;
      border-radius: 5px;
      border: none;
      outline: none;
      padding: 0 10px;
   }

   .button-container{
      flex-grow: 1;
   }
`;

export default StyledAddTask;