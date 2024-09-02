import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WordList from './components/WordList';
import dictionaryData from './data/dictionary.json';

const AppContainer = styled.div`
  text-align: center;
  position: relative;
`;
const LinkedInButton = styled.a`
  position: absolute;
  top: 3px;
  right: 5px;
  padding: 1px 8px;
  background-color: #0077b5;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005582;
  }
`;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);

  useEffect(() => {
    const results = Object.entries(dictionaryData).filter(([word, data]) =>
      word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (data.Amharic && data.Amharic.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (data.English && data.English.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredWords(results);
  }, [searchTerm]);

  // Display first 20 words by default if search is empty
  const wordsToDisplay = searchTerm ? filteredWords : Object.entries(dictionaryData).slice(0, 20);

  return (
    <AppContainer>
      <GlobalStyles />
      <LinkedInButton href="https://www.linkedin.com/in/geremew-belew-2ba270222/" target="_blank" rel="noopener noreferrer">
        Follow me on LinkedIn
      </LinkedInButton>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <WordList words={wordsToDisplay} />
    </AppContainer>
  );
}

export default App;
