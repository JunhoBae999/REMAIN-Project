import React from 'react';
import styled from "styled-components";
import Project from '../../Components/Project';
import Campaign from '../../Components/Campaign';
import Advertise from '../../Components/Advertisement'

export default function HomePresenter() {
  return (
    <>
    <Advertise />
    <Main>
      
      <Project />
      <Campaign />
    </Main>
    </>
  );
}

const Main = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding-top : 10px;
    height: 600px;    
`;
