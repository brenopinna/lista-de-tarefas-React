import { React, useState } from 'react';
import { AddTaskButton, AddTaskContainer, AddTaskInput } from './styles';

const AddTask = ({ handleTaskAddition }) => {
   const [inputValue, setInputValue] = useState('');
   return (
      <AddTaskContainer>
         <AddTaskInput
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder='Sua Tarefa...'
         />
         <AddTaskButton
            onClick={() => {handleTaskAddition(inputValue); setInputValue('')}}
         >
            Adicionar
         </AddTaskButton>
      </AddTaskContainer>
   );
}

export default AddTask;