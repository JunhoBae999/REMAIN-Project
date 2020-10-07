import React from 'react';
import styled from "styled-components";
import Advertise from '../../Components/Advertisement'

export default function Donation() {
  return (
   <>
    <Advertise />
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

const Main = styled.ul`
    display: flex;
    flex-direction: column;
    height: 400px;    
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