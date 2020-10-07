import React,{ useState } from 'react';
import styled from "styled-components";
import {FaHandPointDown } from "react-icons/fa";
import Funding from "../../Funding.js";
import web3 from '../../web3';

export default function Donation() {
   window.ethereum.enable()

   if(typeof(web3) !== "undefined") {
      console.log("web3연결")
   }

   const projectname = "4.3사건"

   const [eth,setEth] = useState(0);
   const [error,setError] = useState("");
   const onChange = (event) => {
      const {
         target:{name,value},
      } = event;
      setEth(value);
   };
   
   const onCheck = async(event)=>{
      const accounts = await web3.eth.getAccounts();
      await Funding.methods.permited(projectname,"0x7dB3Ed482265AF68df9a447634E7eD908AF7F8Ef").send({from :accounts[0] , gas: 3000000}).then(alert("해당 프로젝트가 검증되었습니다."))
    }

   const onSubmit = async (event) => {
      const accounts = await web3.eth.getAccounts();
      console.log(eth);
      console.log(accounts[0])
      await Funding.methods.getDonate(projectname,"0x7dB3Ed482265AF68df9a447634E7eD908AF7F8Ef").send({from :accounts[0] , gas: 3000000, value: eth},function(err,res) {
         console.log(res)
         alert("이더는 스마트 컨트랙트에 보관됩니다. 기관의 사용내역이 인증되고난 후 실제 전송됩니다.")
      })
      const ContractBalance = await web3.eth.getBalance("0x5ae57492a6f2183b973e658ebd529aee7e1d0313")
      console.log("컨트랙트 잔액: ")
      console.log(ContractBalance);
   }
   
   return (
      <Main>
      <LineArea1>
      <Position>
      <FaHandPointDown />
      </Position>
      <Line1 />
      </LineArea1>
        <Title>
         <Span>4.3 평화재단에</Span>
         <Span>기부하고 싶어요!</Span>
        </Title>
        <br></br>
        <SubTitle>4.3 ETH 모금중!</SubTitle>
  
        <Loginbox onSubmit={onSubmit}>
          <Logins name="money"
            type="number"
            required value={eth}
            onChange={onChange}
            className="authInput"
            placeholder='Ether'  />         
          <LoginBtn onClick={onSubmit}>
            <LoginBtntext >기부하기!</LoginBtntext>
          </LoginBtn>
        </Loginbox>
        <LoginBtn onClick={onCheck}>
            <LoginBtntext >검증</LoginBtntext>
          </LoginBtn>
        <LineArea2>
        <Line2 />
        </LineArea2>
        <Receipt> 전자 영수증</Receipt>
        <Detail>
         <Span>전자 영수증, 전달 사진 등 모든 자료를 제출해주세요.</Span>
         <Span>랜덤 기부자에 의해 승인되면 토큰을 반환해드립니다.</Span>
        </Detail>
        <br></br>
          <Btn>
            <Btntext>개인 회원 펀딩 참여하기</Btntext>
          </Btn>
          <Btn>
            <Btntext>단체 회원 펀딩 업로드하기</Btntext>
          </Btn>
      </Main>
    );
  }
  


           
     const Position = styled.span`
        position : relative;
        padding-right : 50px;
     `;
     
     
     
     const Line1 = styled.span`
        width : 200px;
        height : 3px;
        border-radius: 1px;
        background-color: #E8AEFC;
     `
     const LineArea1 = styled.span`
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color : #C173FB;
        flex-direction: column;
     `
     
     const Line2 = styled.span`
        width : 100px;
        height : 1px;
        border : 1px ridge #40e0d0;
     `
     const LineArea2 = styled.span`
        flex: 0.4;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
     `
     
     const Main = styled.ul`
         display: flex;
         flex-direction: column;
         padding : 10px;
         height: 600px;    
         font-weight : 400;
         align-items: center;
         width : 100%;
     `;
     
     const Receipt = styled.span`
         height : 100px;
         width : 100px;
         border-radius: 10px;
         background-color : rgba(220, 220, 220, 0.3);
         box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.5);
         display: flex;
         align-items: flex-end;
         font-size: 15px;
         font-weight: 500;
         padding: 10px;
     `
     
     const Title = styled.ul`
     display: flex;
     flex : 1;
     flex-direction : column;
     font-size: 25px;
     height : 60px;
     font-weight: 600;
     justify-content: flex-start;
     letter-spacing : 2px;
     `;
     
     const SubTitle = styled.ul`
     flex : 0.5;
     display: flex;
     flex-direction : column;
     font-size: 13px;
     color : #999999;
     height : 20px;
     `;
     
     const Span = styled.ul`
     text-align : center;
     padding : 5px;
     width : 300px;
     `;
     
     const Detail = styled.ul`
     margin-top: 30px;
     flex : 1;
     display: flex;
     flex-direction : column;
     font-size: 13px;
     color : #999999;
     height : 20px;
     font-weight: 600;
     `;
     
     const Btn = styled.span`
        background-color: #F4F4F4;
        border-radius: 15px;
        margin-top : 10px;
        height : 40px;
        display: flex;
        justify-content: center;
        align-items : center;
        width: 80%;
     `
     
     const Btntext = styled.span`
        font-size : 20px;
        color: #333333;
        font-weight : bold;
        text-align : center;
     `
     
     
     const LoginBtn = styled.span`
        background-color: black;
        width: 100px;
        border-radius: 15px;
        margin-top : 10px;
        height : 40px;
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
     
     const Logins = styled.input`
     border: none;
     font-size: 15px;
     width: 100%;
     max-width: 400;
     border-bottom : 1px solid #BBBBBB;
     padding-bottom : 10px;
     margin-top: 10px;
     `
     const Loginbox = styled.form`
        flex : 1;
        justify-content: center;
        align-items: center;
        width : 70%;
        display: flex;
        flex-direction: column;
     `
