import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdArrowBack } from "react-icons/md";

export default withRouter(({ location: { pathname } }) => (
  pathname === "/" ? (<Nothing />): (
  <Header>
    <List>
      <MdArrowBack />
      <Text>RE : Main</Text>
      <FiMenu />
    </List>
    <List>
      <Search>
        <TextInput placeholder = '검색어를 입력하세요'></TextInput>
        <FaSearch />
      </Search>      
    </List>
    <List>
      <Item current={pathname === "/home"}>
        <SLink to="/home">홈</SLink>
      </Item>
      <Item current={pathname.substr(0,6) === "/theme"}>
        <SLink to="/theme">테마별</SLink>
      </Item>
      <Item current={pathname === "/mypage"}>
        <SLink to="/mypage">마이페이지</SLink>
      </Item>
      <Item current={pathname === "/alarm"}>
        <SLink to="/alarm">알림</SLink>
      </Item>
      <Item current={pathname === "/token"}>
        <SLink to="/token">토큰</SLink>
      </Item>
    </List>
  </Header>
)));

const Nothing = styled.header`
`;

const Header = styled.header`
  display: flex;
  justify-items : center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  display: flex;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const List = styled.ul`
  display: flex;
  padding-left : 10px;
  padding-right : 10px;
  font-size: 20px;
  flex : 1;
  width : 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


const Item = styled.li`
  width: 20%;
  min-width: 60px;
  max-width: 100px;
  height: 40px;
  text-align: center;
  color: ${props => (props.current ? "#000000" : "rgba(200, 200, 200, 0.9)")};;
  border-bottom: 1px solid
    ${props => (props.current ? "#000000" : "rgba(200, 200, 200, 0.9)")};
  transition: border-bottom 0.5s ease-in-out;
  font-size: 15px;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  color: #3dd;
  font-size: 28px;
  font-weight: '500';
  align-items: center;
  justify-content: center;
`;

const TextInput = styled.input`
  color: #888888;
  font-size: 17px;
  font-weight: '500';
  border : 0px;
  width : 100%;
`;


const Search = styled.span`
display: flex;
flex-direction: row;
height: 30px;
font-size: 20px;
align-items: center;
padding-left: 10px;
padding-right: 10px;
width: 70%;
max-width: 500;
border: 1px solid #CCCCCC;
border-radius: 30px;
padding-left: 10px;
justify-content: space-between;
margin-left : 15%;
`;
