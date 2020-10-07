import React from 'react';
import styled from "styled-components";
import {AiOutlineLeft} from "react-icons/ai";
import web3 from "../web3.js";
import RemainToken from "../RemainToken";
import { Link } from "react-router-dom";
import { GiWaxSeal } from "react-icons/gi";
import Web3 from 'web3';


 
export default function Poster({location, description}) {

  const onClick =  async () => {
    const web3 = new Web3(window.web3.currentProvider);
    web3.eth.getAccounts(function(err, accountList) {
      console.log(err, accountList);
      RemainToken.methods.verifyUserLocation(accountList[0],{location},"제주도를 따라가다.").send({from:accountList[0]},function(err,res) {
        alert("인증되었습니다.")
      })

      })
 }
 
  return (
    <>
    <Approve>
      <GiWaxSeal onClick = {onClick} />
    </Approve>
    <Main to={`/theme/1/Map`}>
      <Img src={require('../assets/project3.jpg')} width='300' height='180' />
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
    </>
  );
};

const Approve = styled.span`
   top: -50px;
   color: red;
   font-size: 70px;
   padding-left: 270px;
   width: 0px;
   height: 0px;
   z-index: 2;
`

const Main = styled(Link)`
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 300px;
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

