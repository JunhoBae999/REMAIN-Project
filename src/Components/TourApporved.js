import React from 'react';
import styled from "styled-components";
import {AiOutlineLeft} from "react-icons/ai";
import RemainToken from "../RemainToken.js";
import web3 from "../web3.js";


export default function Poster() {

  var data;

  RemainToken.events.Locations({filter:{_courseId:"36864917885414268870132059435602256107039667340339441452446531848556956815160"},fromBlock: 0,},function(error, event){ data = event.returnValues['_locname'];   console.log(data)
})

console.log(data)
 



  return (
    <Main>
      <Img src={require('../assets/project3.jpg')} width='340' height='180' />
      <MainProject>
        <View>
          <First>나의 포스팅</First>
        </View>
        <View>
          <AiOutlineLeft color='white' />
          <Second>제주를 4.3 사건을 따라가다</Second>
        </View>
        <View>
          <First>제작 : 배준호</First>
        </View>
      </MainProject>
    </Main>
  );
}

const Main = styled.span`
    display: flex;
    flex-direction: row;
    height: 180px;
    width: 340px;
    margin : 10px;
    margin-bottom : 40px;
`;

const Img = styled.img`
  flex: 1 ;
  z-index : -2;
  position : absolute;
  opacity: 0.9;
`

const MainProject = styled.span`
    height: 150px;
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

const View = styled.span`
flex : 1;
font-size: 20px;
display: flex;
align-items : center;
`

