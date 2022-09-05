import styled from "styled-components";
import Button from '../../../components/Button/index'

export const AddTaskContainer = styled.div`
   max-width: 100%;
   height: 40px;
   display: flex;
   gap: 8px;
   margin: 15px 0;
`;

export const AddTaskInput = styled.input`
   font-size: 16px;
   flex-grow: 2;
   color: #eee;
   background-color: #444;
   border-radius: 5px;
   border: none;
   outline: none;
   padding: 0 10px;
`;

export const AddTaskButton = styled(Button)`
   flex-grow: 1;
`;