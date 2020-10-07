import React from 'react';
import styled from "styled-components";
import {AiOutlineLeft} from "react-icons/ai";
import web3 from "../web3.js";
import RemainToken from "../RemainToken";
import { Link } from "react-router-dom";

 
export default function Poster({location, description}) {

  const onClick = async (event) => {
    const accounts = await web3.eth.getAccounts();
    await RemainToken.methods.verifyUserLocation(accounts[0],{location},"제주도를 따라가다.").send({from:accounts[0]},function(err,res) {
      alert("인증되었습니다.")
    })
 }
 
  return (
    <Main to={`/theme/1/Map`}>
      <Img src={require('../assets/project3.jpg')} width='340' height='180' />
      <MainProject>
        <View>
          <First>나의 포스팅</First>
        </View>
        <View>
          <AiOutlineLeft color='white' />
          <Second onClick = {onClick}>{location}</Second>
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

const Main = styled(Link)`
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

