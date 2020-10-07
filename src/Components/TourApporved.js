import React from 'react';
import styled from "styled-components";
import {AiOutlineLeft} from "react-icons/ai";

 
export default function Poster({location, description}) {
 
  return (
    <Main>
      <Img src={require('../assets/project3.jpg')} width='340' height='180' />
      <MainProject>
        <View>
          <First>나의 포스팅</First>
        </View>
        <View>
          <AiOutlineLeft color='white' />
          <Second>{location}</Second>
        </View>
        <View>
          <First>제작 : 배준호</First>
        </View>
        <View>
          <Third>{description}</Third>
        </View>
      </MainProject>
    </Main>
  );
};

const Main = styled.span`
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 340px;
    margin : 10px;
    margin-bottom : 30px;
    background-color: rgba(0,0,0, 0.4);
`;

const Img = styled.img`
  flex: 1 ;
  z-index : -2;
  position : absolute;
  opacity: 0.6;
`

const MainProject = styled.span`
    height: 180px;
    width: 100%;
    padding : 10px;
`;

const First = styled.ul`
font-size: 15px;
color : white;
padding-left : 20px;
`;

const Second = styled.ul`
font-size: 20px;
padding : 10px;
color: white;
`;

const Third = styled.ul`
font-size: 12px;
padding : 10px;
margin-top: 10px;
color: white;
border-radius: 10px;
`;


const View = styled.span`
flex : 1;
font-size: 20px;
display: flex;
align-items : center;
`;

