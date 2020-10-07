import React from 'react';
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

export default function Campaign() {
  return (
    <Main>
      <Title>프로모션 & 이벤트</Title>
      <SubTitle>
        <Left>현재 진행 중인 이벤트를 만나보세요!</Left>
        <Button> 이벤트 더보기 <AiOutlineRight /> </Button>
      </SubTitle>
      <MainProject>
          {data.map((data) => (
            <Span> 
              <img src={data.img} width='200' height='150' />
              <ProjectName>{data.title}</ProjectName>
            </Span> 
           ))}         
      </MainProject>
    </Main>
  );
}

const Main = styled.ul`
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

const MainProject = styled.ul`
flex : 7;
display: flex;
flex-direction: row;
white-space:nowrap;
overflow:auto;
`

const ProjectName = styled.ul`
font-size: 17px;
flex : 1;
padding-top : 10px;
`;

const Span = styled.button`
  border : none;
  background-color: white;
  padding: 10px; 
  display: flex;
  flex-direction : column;
`


const data = [
    {
     id : 1,
     img : require('../assets/promotion1.jpg'),
     title: '여행을 떠나요',
    },
    {
      id : 2,
      img : require('../assets/promotion1.jpg'),
      title: '여행을 떠나요',
    },
    {
     id : 1,
     img : require('../assets/promotion1.jpg'),
     title: '여행을 떠나요',
    },
    {
      id : 2,
     img : require('../assets/promotion1.jpg'),
     title: '여행을 떠나요',
    },
]