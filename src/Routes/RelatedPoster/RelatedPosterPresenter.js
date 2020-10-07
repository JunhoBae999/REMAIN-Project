import React from 'react';
import styled from "styled-components";
import Poster from '../../Components/Poster'
import { HiPencil } from "react-icons/hi";

export default function Project() {
  return (
    <Main>
      <Title>관련 포스트</Title>
      <SubTitle>
        <Left>제주 4.3 사건 관련 포스트에요</Left>
        <Button>  <HiPencil /> </Button>
      </SubTitle>
      <Poster title = 'TOUR'/>
      <Poster title = 'DONATION'/>
      <Poster title = 'HISTORY'/>
    </Main>
  );
}

const Main = styled.ul`
    padding-top : 20px;
    display: flex;
    flex-direction: column;
    padding-left : 10px;
    height: 300px;    
    font-weight : 500;
`;
const Button = styled.button`
    display: flex;
    font-weight : 400;
    font-size: 12px;
    border: none;
    background-color: white;
    align-items: center;
    
`;


const Title = styled.ul`
font-size: 20px;
flex: 1;
justify-content: flex-start;
padding-bottom : 10px;
`;

const SubTitle = styled.ul`
display: flex;
flex : 1;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-weight : 500;
`;

const Left = styled.ul`
font-size: 15px;
color : #999999;
flex : 1;
`;
