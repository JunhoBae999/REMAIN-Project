import React from 'react';
import styled from "styled-components";
import {FaHandPointDown } from "react-icons/fa";
import Funding from "../Funding.js";
import web3 from "../web3.js";

export default function Donation() {
   ethereum.enable();

   const onClick = async (event) => {
      event.preventDefault();    
      try {
      const balance;  
      const account = web3.eth.accounts[0];
      const sendaddress;
      
      web3.eth.sendTrnasaction({from:account,to:'0x7dB3Ed482265AF68df9a447634E7eD908AF7F8Ef',value:0.0001},
      function(err, transactionHash) {
         console.log(transactionHash);
         alert(transactionHash)
      })
      } catch (error) {
        console.log('error');
        alert(error.message);
      }}





  return (
    <Main>
    <LineArea1>
    <Position>
    <FaHandPointDown />
    </Position>
    <Line1 />
    </LineArea1>
      <Title>
       <Span>4.3 평화재단에</Span>
       <Span>기부하고 싶어요!</Span>
      </Title>
      <SubTitle>4.3 ETH 모금중!</SubTitle>
      <LineArea2>
      <Line2 />
      </LineArea2>
      <Receipt> 전자 영수증</Receipt>
      <Detail>
       <Span>전자 영수증, 전달 사진 등 모든 자료를 제출해주세요.</Span>
       <Span>랜덤 기부자에 의해 승인되면 토큰을 반환해드립니다.</Span>
      </Detail>
        <Btn>
          <Btntext>개인 회원 펀딩 참여하기</Btntext>
        </Btn>
        <Btn>
          <Btntext>단체 회원 펀딩 업로드하기</Btntext>
        </Btn>
    </Main>
  );
}

const Position = styled.span`
   position : relative;
   padding-right : 50px;
`;



const Line1 = styled.span`
   width : 200px;
   height : 3px;
   border-radius: 1px;
   background-color: #E8AEFC;
`
const LineArea1 = styled.span`
   flex: 1;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 20px;
   color : #C173FB;
   flex-direction: column;
`

const Line2 = styled.span`
   width : 100px;
   height : 1px;
   border : 1px ridge #40e0d0;
`
const LineArea2 = styled.span`
   flex: 0.4;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Main = styled.ul`
    display: flex;
    flex-direction: column;
    padding : 10px;
    height: 600px;    
    font-weight : 400;
    align-items: center;
    width : 100%;
`;

const Receipt = styled.span`
    height : 100px;
    width : 100px;
    border-radius: 10px;
    background-color : rgba(220, 220, 220, 0.3);
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-end;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
`

const Title = styled.ul`
display: flex;
flex : 1;
flex-direction : column;
font-size: 25px;
height : 60px;
font-weight: 600;
justify-content: flex-start;
letter-spacing : 2px;
`;

const SubTitle = styled.ul`
flex : 0.5;
display: flex;
flex-direction : column;
font-size: 13px;
color : #999999;
height : 20px;
`;

const Span = styled.ul`
text-align : center;
padding : 5px;
width : 300px;
`;

const Detail = styled.ul`
margin-top: 30px;
flex : 1;
display: flex;
flex-direction : column;
font-size: 13px;
color : #999999;
height : 20px;
font-weight: 600;
`;

const Btn = styled.span`
   background-color: #F4F4F4;
   border-radius: 15px;
   margin-top : 10px;
   height : 40px;
   display: flex;
   justify-content: center;
   align-items : center;
   width: 80%;
`

const Btntext = styled.span`
   font-size : 20px;
   color: #333333;
   font-weight : bold;
   text-align : center;
`