import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSetting } from "react-icons/ai";
import { authService} from 'fbase';
import { useHistory } from 'react-router-dom';

export default function MypageScreen() {
  var user = authService.currentUser;
  console.log(user);
  const [username, setName] = useState(user.displayName);
  const [userface, setFace] = useState(user.photoURL);
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
    } else if (name === "face") {
      setFace(value);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSubmit = async (event) => {
    try {
      user = await authService.currentUser;
      user.updateProfile({
          displayName: username,
          photoURL: userface,
        })
      window.history.back();
    } catch (error) {
      console.log('error');
      alert(error.message);
    }
  }

    return (
<Main>
  <View>
  <Img src={userface} width='200' height='200'/>
  </View>
  <View >
    <Span>
    {username}  
      <AiOutlineSetting onClick={toggleAccount}/>
    </Span>
  </View>
  <View>
    <Detail>MEMBER| LV.1 루키|</Detail>
    <Detail>가입일 {user.metadata.creationTime.substr(4,12)}</Detail>
  </View>

  {!newAccount ? (
      <Loginbox onSubmit={onSubmit} className="container">
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
        <LoginBtn onClick={onSubmit} className="authSwitch">
          <LoginBtntext >회원정보 수정</LoginBtntext>
        </LoginBtn>
      </Loginbox>
      ) : (
  <Contents2>
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
  </Contents2>
      )}  
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
const Contents2 = styled.li`
    display: flex;
    flex: 3;
    flex-direction: column;
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

const Loginbox = styled.form`
   align-self: center;
   flex : 3;
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
   background-color: black;
   border-radius: 15px;
   margin-top : 10px;
   height : 40px;
   width : 200px;
   display: flex;
   justify-content: center;
   align-items : center;
`
const LoginBtntext = styled.span`
   font-size : 20px;
   color: white;
   font-weight : bold;
   text-align : center;
`