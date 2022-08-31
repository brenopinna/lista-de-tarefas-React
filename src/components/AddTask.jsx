import { React, useState } from 'react';

import Button from './Button';

import './AddTask.css';

const AddTask = ({ handleTaskAddition }) => {
   const [inputValue, setInputValue] = useState('');
   return (
      <div className="add-task-container">
         <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className='add-task-input'
            type="text"
            placeholder='Sua Tarefa...'
         />
         <div className="add-button-container">
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

export default AddTask;