import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TourApproved from '../../Components/TourApporved';
import NaverMap from '../../Components/NaverMap';
import RemainToken from "../../RemainToken.js";

export default function MapScreen({match}) {
  console.log(match);
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

return (
<Main>
  <TourApproved location={" "} description={" "}/>
  <View>
    <NaverMap />
  </View>
</Main>
);
};


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
    height: 650px;
`;


const View = styled.ul`
   padding : 10px;
`;