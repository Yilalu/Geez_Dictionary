import React from 'react';
import styled from 'styled-components';
import WordCard from './WordCard';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const WordList = ({ words }) => {
  return (
    <ListContainer>
      {words.map(([word, data], index) => (
        <WordCard key={index} word={word} data={data} />
      ))}
    </ListContainer>
  );
};

export default WordList;
