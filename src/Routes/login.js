import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import web3 from "../web3.js"
import RemainToken from "../RemainToken.js";


export default function Login() {
  if (typeof web3 !== 'undefined') {
    console.log('Metamask가 설치되어 있습니다.')
    window.ethereum.enable();
  }
  
  return (
    <Container>
      <Mainbox>
        <Main>RE : Main</Main>
      </Mainbox>
      <Loginbox>
        <Logins placeholder='E-mail'  />
        <Logins placeholder='Password' type='password'  />
      </Loginbox>
      <Btnbox>
        <LoginBtn to="/home">
          <LoginBtntext >로그인</LoginBtntext>
        </LoginBtn>
        <JoinBtn>
          <JoinBtntext>개인 회원 가입</JoinBtntext>
        </JoinBtn>
        <JoinBtn>
          <JoinBtntext>단체 회원 가입</JoinBtntext>
        </JoinBtn>
      </Btnbox>
    </Container>
  );
}

const Container = styled.ul`
   height : 600px;
   display : flex;
   flex-direction : column;
   width : 100%;
   align-items: center;
`

const Mainbox = styled.li`
   flex : 4;
   display : flex;
   width : 100%;
   align-items: flex-end;
   justify-content: center;
`

const Main = styled.span`
color: #3dd;
font-size: 35px;
font-weight: 500;
display: flex;
`

const Loginbox = styled.li`
   flex : 6;
   justify-content: center;
   align-items: center;
   width : 70%;
   display: flex;
   flex-direction: column;
`
const Logins = styled.input`
border: none;
font-size: 15px;
width: 100%;
max-width: 400;
border-bottom : 1px solid #BBBBBB;
padding-bottom : 10px;
margin-top: 10px;
`




const Btnbox = styled.li`
flex : 3;
justify-content : center;
width: 85%;
max-width : 700;
display: flex;
flex-direction: column;
`

const LoginBtn = styled(Link)`
   background-color: #F4F4F4;
   border-radius: 15px;
   margin-top : 10px;
   height : 40px;
   display: flex;
   justify-content: center;
   align-items : center;
`
const JoinBtn = styled.span`
   background-color: white;
   border-radius: 15px;
   margin-top : 10px;
   border: 2px solid #CCCCCC;
   height : 40px;
   display: flex;
   justify-content: center;
   align-items : center;
`
const LoginBtntext = styled.span`
   font-size : 20px;
   color: #3F1D0B;
   font-weight : bold;
   text-align : center;
`
const JoinBtntext = styled.span`
   font-size : 20px;
   color: #AAAAAA;
   font-weight : bold;
   text-align : center;
`
