import React from 'react';
import styled from "styled-components";
import { AiOutlineSetting } from "react-icons/ai";

export default function MypageScreen({userObj}) {
  console.log(userObj)
    return (
<Main>
  <View>
  <Img src={require('../../assets/project1.jpg')} width='200' height='200'/>
  </View>
  <View >
    <Span>
    이한나  
      <AiOutlineSetting />
    </Span>
  </View>
  <View>
    <Detail>MEMBER| LV.2 루키|</Detail>
    <Detail>가입일 2020. 03. 02</Detail>
  </View>
  <Contents>
    <Content>
      <Number>10</Number>
      <Naming>여행지 인증</Naming>
    </Content>
    <Content>
      <Number>160</Number>
      <Naming>스크랩</Naming>
    </Content>
    <Content>
      <Number>5</Number>
      <Naming>기부</Naming>
    </Content>
  </Contents>
  <Contents>
    <Content>
      <Number>1</Number>
      <Naming>NFT 토큰</Naming>
    </Content>
    <Content>
      <Number>0.5 ETH</Number>
      <Naming>지갑</Naming>
    </Content>
  </Contents>
</Main>
);
};

const Img = styled.img`
  border-radius: 100%;
`

const Main = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex: 1;
    font-size: 23px;
    font-weight: 700;
    text-align : center;
    padding-top : 20px;
    height: 500px;
`;

const Span = styled.ul`
    display: flex;
    flex : 1;  
    justify-content: center;
    align-items: center;
    width : 30%;
`;

const View = styled.ul`
   display: flex;
   flex : 1;  
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

const Detail = styled.ul`
   display: flex;
   font-size : 12px;
   color : #555555;
`;

const Number = styled.ul`
flex: 1;
    font-size : 20px;
    font-weight : 400;
    color: #00AAFF;
    text-align: center;
`;

const Details = styled.ul`
   font-size : 12px;
   color : #555555;
`;

const Naming = styled.ul`
flex: 1;
font-size : 10px;
font-weight : 350;
color : #555555;
text-align: 'center';
`;

const Contents = styled.li`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    text-align :center;
    border-color : 1px solid #DDDDDD;
    padding-left : 5px;
    padding-right : 5px;
    align-self: center;
`;

const Content = styled.li`
    display: flex;
    width : 100px;
    flex-direction : column;
    align-items :'center';
    justify-content: 'space-around';
    flex: 1px;
    border-right : 1px solid #DDDDDD;
    border-left : 1px solid #DDDDDD;
`;
