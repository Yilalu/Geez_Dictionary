// SearchBar.js
import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 12px 20px;
  border: 2px solid #2980b9;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: relative;
  left: -35px;
  top: 10px;
  color: #2980b9;
  pointer-events: none;
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon />
    </SearchContainer>
  );
};

export default SearchBar;
