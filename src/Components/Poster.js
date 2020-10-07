import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Poster({title}) {
  return (
    <Main to={`/theme/1/${title}`}>
      <Img src={require('../assets/project1.jpg')} width='200' height='150' />
      <MainProject>
          <First>{title}</First>
          <Second>{title}</Second>
          <Third>2시간 전 생성</Third>
      </MainProject>
    </Main>
  );
}

const Main = styled(Link)`
    display: flex;
    flex-direction: row;
    height: 150px;
    width: 350px;
    margin : 10px;
`;

const Img = styled.img`
  flex: 1 ;
`

const MainProject = styled(Link)`
    flex: 2;
    height: 150px;
    width: 150px;
    padding : 10px;
    background-color : #BBBBBB;
`;

const First = styled.ul`
font-size: 15px;
color : #EEEEEE;
padding-left : 10px;
`;

const Second = styled.ul`
font-size: 20px;
padding : 10px;
color: white;
`;

const Third = styled.ul`
font-size: 10x;
padding : 10px;
padding-top: 50px;
color: #5ff;
bottom : 10px;
`;
