import React from 'react';
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <Main>
      <Title>프로젝트</Title>
      <SubTitle>
        <Left>현재 진행 중인 프로젝트에요!</Left>
        <Button to= {`/theme`}> 프로젝트 더보기 <AiOutlineRight /> </Button>
      </SubTitle>
      <MainProject>
          {data.map((data) => (
            <Span to= {`/theme/${data.id}`}> 
              <img src={data.img} width='200' height='150' />
              <ProjectName>{data.title}</ProjectName>
              <ProducerName>{data.producer}</ProducerName>
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
const Button = styled(Link)`
    display: flex;
    font-weight : 400;
    font-size: 12px;
    border: none;
    background-color: white;
    justify-content: center;
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
const ProducerName = styled.ul`
font-size: 13px;
color : #888888;
flex : 1;
`;

const Span = styled(Link)`
  padding: 10px; 
  display: flex;
  flex-direction : column;
`


const data = [
    {
     id : 1,
     img : require('../assets/project1.jpg'),
     title: '제주도를 찾아서',
     producer : '안도희'
    },
    {
      id : 2,
     img : require('../assets/project2.jpg'),
     title: '군함도를 기억해주세요',
     producer : '임채영'
    }
]