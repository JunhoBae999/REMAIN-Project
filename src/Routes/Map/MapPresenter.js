import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TourApproved from '../../Components/TourApporved';
import NaverMap from '../../Components/NaverMap';
import RemainToken from "../../RemainToken.js";

export default function MapScreen() {
return (
<Main>
  <TourApproved location={'제주 4.3 평화공원'} description={`제주 4·3 평화공원은 대한민국 제주특별자치도 제주시 봉개동에 위치한 공원으로, 4·3 사건의 희생자의 넋을 위령하고, 사건의 역사적 의미를 되새기고 희생자의 명예회복 및 평화와 인권을 위해서 조성되었다.`} />
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