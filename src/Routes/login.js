import React, { useState } from "react";
import { authService } from "fbase";
import styled from "styled-components";
import { Link } from "react-router-dom";
import web3 from "../web3.js"


export default function Login() {
  if (typeof web3 !== 'undefined') {
    console.log('Metamask가 설치되어 있습니다.')
    console.log(web3)
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const [userface, setFace] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "face") {
      setFace(value);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();    
    try {
      let data;
      if (!newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        var user = await authService.currentUser;
        user.updateProfile({
            displayName: username,
            photoURL: userface,
            approved : 0,
            scrap : 0,
            donation : 0,
            nft: 0
          }).then()
          } else {
        data = await authService.signInWithEmailAndPassword(email, password);        
         }
    } catch (error) {
      console.log('error');
      alert(error.message);
    }}
  return (
    <Container>
      <Mainbox>
        <Main>RE : Main</Main>
      </Mainbox>
        {newAccount ? (
      <Loginbox onSubmit={onSubmit} className="container">
        <Logins name="email"
          type="email"
          required value={email}
          onChange={onChange}
          className="authInput"
          placeholder='E-mail'  />
        <Logins 
          name="password"
          type="password"
          placeholder="Password"
          required value={password}
          className="authInput"
          onChange={onChange}  />
      </Loginbox>
      ) : (
      <Loginbox onSubmit={onSubmit} className="container">
        <Logins name="email"
          type="email"
          required value={email}
          onChange={onChange}
          className="authInput"
          placeholder='E-mail'  />
        <Logins 
          name="password"
          type="password"
          placeholder="Password"
          required value={password}
          className="authInput"
          onChange={onChange}  />
        <Logins 
          name="name"
          placeholder="Name"
          required value={username}
          className="authInput"
          onChange={onChange}  />
        <Logins 
          name="face"
          placeholder="faceUrl"
          required value={userface}
          className="authInput"
          onChange={onChange}  />
      </Loginbox>
      )}
      <Btnbox>
        <LoginBtn onClick={onSubmit} className="authSwitch">
          <LoginBtntext >{newAccount ? ('로그인') : ('회원 등록')}</LoginBtntext>
        </LoginBtn>
        <JoinBtn onClick={toggleAccount} className="authSwitch">
          <JoinBtntext>{newAccount ? ('개인 회원 가입') : ('개인 회원 로그인')}</JoinBtntext>
        </JoinBtn>
        <JoinBtn onClick={toggleAccount} >
          <JoinBtntext>{newAccount ? ('단체 회원 가입') : ('단체 회원 로그인')}</JoinBtntext>
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

const Loginbox = styled.form`
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

const LoginBtn = styled.span`
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
