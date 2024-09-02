import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #ecf0f1;
  border-radius: 10px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  width: 300px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const GeezText = styled.h2`
  font-size: 2rem;
  color: #8e44ad;
  margin-bottom: 10px;
`;

const Translation = styled.p`
  font-size: 1.1rem;
  margin: 5px 0;
`;

const LanguageLabel = styled.span`
  font-weight: bold;
  color: #2c3e50;
`;

const DetailsContainer = styled.div`
  margin-top: 15px;
`;

const DetailItem = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 3px 0;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  max-width: 200px; /* Limit the maximum width of the audio player */
  margin-top: 10px;
`;

const WordCard = ({ word, data }) => {
  return (
    <CardContainer>
      <GeezText>{word}</GeezText>
      {data.Amharic && (
        <Translation>
          <LanguageLabel>Amharic:</LanguageLabel> {data.Amharic}
        </Translation>
      )}
      {data.English && (
        <Translation>
          <LanguageLabel>English:</LanguageLabel> {data.English}
        </Translation>
      )}
      {data.Voice && (
        <AudioPlayer controls>
          <source src={`/path/to/voices/${data.Voice}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </AudioPlayer>
      )}
      {data.Details && Object.values(data.Details).some(value => value) && (
        <DetailsContainer>
          <LanguageLabel>Details:</LanguageLabel>
          {Object.values(data.Details)
            .filter(value => value) // Filter out empty values
            .map((value, index) => (
              <DetailItem key={index}>{value}</DetailItem>
            ))}
        </DetailsContainer>
      )}
    </CardContainer>
  );
};

export default WordCard;
