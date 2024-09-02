import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2980b9;
  padding: 20px;
  text-align: center;
  color: white;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem; /* Default size */
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem; /* Smaller devices */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Even smaller devices */
  }
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
