import React from 'react';
import styled from "styled-components";
import { BiBookmark } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";

export default function ReservedProject() {
    return (
<Main>
  <Scroll >
      {data.map((data) => (
        <Theme> 
          <span>{data.title}</span>
          <span>{data.check ? (<BiBookmark />) : (<BsFillBookmarkFill />)}</span>
        </Theme> 
           ))}       
  </Scroll>
</Main>
);
};

const Main = styled.ul`
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex: 1;
    font-weight: 700;
    text-align : center;
    padding-top : 10px;
    height: 250px;
    overflow:auto;
`;

const Scroll = styled.ul`
  white-space:nowrap;
  overflow:auto;

`

const Theme = styled.button`
    font-size: 18px;
    background-color : white;
    width: 100%;
    border-left: none;
    border-right: none;
    margin-top: 20px;
    margin-bottom: 20px;
    padding : 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height : 60px;
    font-weight: 300;
    color : #555555;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
`;



const data = [
  {
   id : 1,
   title: '일제시대 위안부',
   check : true
  },
  {
   id : 2,
   title: '독립투쟁',
   check : false
  },
  {
   id : 3,
   title: '4.19 혁명',
   check : false
  },
  {
   id : 4,
   title: '부마항쟁',
   check : false
  },
]