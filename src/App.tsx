import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Card } from './assets/components/Card.styled';
import { Image } from './assets/components/Image.styled';
import { PageText } from './assets/components/PageText.styled';
import { BoxButton, PageButton } from './assets/components/Button.styled';

function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <Image />
          <PageText headline>Headline</PageText>
          <PageText textline>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</PageText>
          <BoxButton>
            <PageButton see>See more</PageButton>
            <PageButton save>Save</PageButton>
          </BoxButton>
        </Card>
        <Card color={"#fdffef"}>
          <Image />
          <PageText headline>Headline</PageText>
          <PageText textline>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</PageText>
          <BoxButton>
            <PageButton see>See more</PageButton>
            <PageButton save>Save</PageButton>
          </BoxButton>
        </Card>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;
`

