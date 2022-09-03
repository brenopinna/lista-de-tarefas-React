import React from 'react';
import styled from "styled-components";

const Header = ({ className }) => {
   return (
      <h1 className={className}>Minhas Tarefas</h1>
   );
}

const styledHeader = styled(Header)`
   color: #eee;
`;

export default styledHeader;