import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import TourApproved from '../../Components/TourApporved';
import { AiOutlineRight } from "react-icons/ai";
import RemainToken from "../../RemainToken.js";



export default function Project() {
  const [datas, setData] = useState([]);
  var name = [];
  const filter = {_courseId:"36864917885414268870132059435602256107039667340339441452446531848556956815160"};
  var pastTransferEvents = RemainToken.getPastEvents('Locations', filter, {fromBlock: 0, toBlock: 'latest'});
  useEffect( () => {pastTransferEvents.then( (events) => {
    events.map( async (event) => {
      await name.push([event.returnValues[1], event.returnValues[2]]);
    })}).then(() => {
      setData(name);
    });
  }, []);
  var number = -1;
  return (
    <Main>
      <Title>여행지 인증 포스트</Title>
      <SubTitle>
        <Left>제주 4.3 사건 TOUR 포스트에요</Left>
        <Button>  포스팅 구경하기<AiOutlineRight /> </Button>
      </SubTitle>
      {datas.map(data => {
        return <TourApproved location={data[0]} description={data[1]} />
        })}
    </Main>
  );
}

const Main = styled.ul`
padding-top : 20px;
    display: flex;
    flex-direction: column;
    padding-left : 10px;
    height: 300px;    
    font-weight : 500;
`;
const Button = styled.button`
    display: flex;
    font-weight : 400;
    font-size: 12px;
    border: none;
    background-color: white;
    align-items: center;
    
`;


const Title = styled.ul`
font-size: 20px;
flex: 1;
justify-content: flex-start;
padding-bottom : 10px;
`;

const SubTitle = styled.ul`
display: flex;
flex : 1;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-weight : 500;
`;

const Left = styled.ul`
font-size: 15px;
color : #BBBBBB;
flex : 1;
`;
