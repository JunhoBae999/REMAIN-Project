import React from 'react';
import styled from "styled-components";
import Theme from '../../Components/ThemeProject'
import RTheme from '../../Components/ReservedProject'
import { MdLocationOn } from "react-icons/md";

export default function HomePresenter() {
  return (
    <Main>
  <Title>
    진행중 테마 
    <MdLocationOn />
  </Title>
      <Theme />
  <Title>
    진행 예정 테마 
  </Title>
      <RTheme />
    </Main>
  );
}

const Title = styled.span`
   font-size: 23px;
   font-weight: 700;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 20px;
   padding-right: 20px;
   margin-top : 30px;
`

const Main = styled.ul`
    min-height: 600px;    
`;
