import React from 'react';
import styled from "styled-components";

export default function Donation() {
  return (
   <>
     <Advertise />
     <Theme> 
       <span>위안부 피해자 프로젝트 오픈 예정</span>
     </Theme> 
     <Main>

        <JoinBtn>
          <JoinBtntext>제주 4.3 사건 NFT 토큰 지급까지 3번 남았습니다</JoinBtntext>
        </JoinBtn>
        <JoinBtn>
          <JoinBtntext>단체 회원 가입을 하시면 NFT 토큰 무료</JoinBtntext>
        </JoinBtn>
        <JoinBtn>
          <JoinBtntext>제주 4.3 사건 NFT 토큰 지급까지 3번 남았습니다</JoinBtntext>
        </JoinBtn>
        <JoinBtn>
          <JoinBtntext>단체 회원 가입을 하시면 NFT 토큰 무료</JoinBtntext>
        </JoinBtn>
    </Main>
   </>
  );
}

const Advertise = styled.span`
   width : 100px; 
   height: 200px;
   border : 1px solid black;
`;

const Theme = styled.button`
    font-size: 15px;
    background-color : white;
    width: 100%;
    border-left: none;
    border-right: none;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left : 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height : 20px;
    font-weight: 300;
    color : #555555;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
`;


const Main = styled.ul`
    display: flex;
    flex-direction: column;
    padding : 10px;
    height: 600px;    
    font-weight : 400;
    align-items: center;
    width : 100%;
`;


const JoinBtn = styled.span`
   background-color: #F4F4F4;
   border-radius: 5px;
   margin-top : 10px;
   height : 40px;
   display: flex;
   justify-content: center;
   align-items : center;
   width : 100%;
`
const JoinBtntext = styled.span`
   font-size : 13px;
   color: #999999;
   font-weight : 400;
   text-align : center;
`