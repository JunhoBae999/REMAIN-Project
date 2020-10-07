import React from 'react';
import styled from "styled-components";

export default function Campaign() {
  return (
    <>
    <Advertise src={require('../assets/project2.jpg')} width='300' height='100'/>
    <Theme> 
      <Live> 실시간 </Live>
      <Time> 10월14일 </Time>
      <Content>위안부 피해자 프로젝트 오픈 예정</Content>
    </Theme>
    </> 
  );
}

const Advertise = styled.img`
   width : 100%; 
   display: flex;
`;

const Live = styled.span`
   flex: 1;
   color: #0000FF;
    align-items: center;
`;

const Time = styled.span`
    flex: 2;
    color : #3dd;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Content = styled.span`
   flex: 6;
   display: flex;
   justify-content: flex-start;
   padding-left : 10px;
`;

const Theme = styled.button`
    font-size: 13px;
    background-color : white;
    width: 100%;
    border-left: none;
    border-right: none;
    margin-bottom: 20px;
    padding-left : 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height : 25px;
    font-weight: 300;
    color : #555555;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
`;
