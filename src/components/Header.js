import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2980b9;
  padding: 20px;
  text-align: center;
  color: white;
`;

const HeaderTitle = styled.h1`
  font-size: 6vw;  /* Adjust the value to make it responsive */
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Ge'ez - Amharic - English Dictionary</HeaderTitle>
      <SubTitle>Explore the ancient language with ease</SubTitle>
    </HeaderContainer>
  );
};

export default Header;
