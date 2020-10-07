import React from 'react';
import styled from "styled-components";

export default function HomePresenter() {
  return (
    <Main>
      <img src={require(`../../assets/jeju.jpg`)} width='300px' height='300px' />
    </Main>
  );
};

const Main = styled.ul`
    padding: 40px;
    min-height: 600px;    
`;
