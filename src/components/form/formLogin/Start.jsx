import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

//틴더 시작페이지 
const Start = () => {
    let Navigate = useNavigate();
   
    return (
<div>
    <StForm>
    <div>
        <Info>
        <Title>로그인하면 Tinder 이용약관에 동의하는 것으로 간주됩니다.
        Tinder의 회원 정보 처리 방식은 개인정보 처리방침 및 쿠키 정책에서 확인해 보세요.</Title>
        
        <Button onClick={() => { Navigate("/login") }}>기존회원 로그인</Button>
           <Button onClick={() => { Navigate("/agrees") }}>신규회원가입</Button>
           <Title>로그인이 안되나요?</Title>
        
        </Info>
        
           
        
       
        
    </div>
    </StForm>
  
</div>

    )
};

export default Start;


const Info =styled.div`
    margin-top: 35rem;
    width: 430px;
    display: inline-block;
    color: white;
    font-size: 15px;
`

const StForm = styled.div`
background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbv4tNE%2FbtrLR859YIU%2FcAjLm5ywDWTPva6NktEm00%2Fimg.png") center center ;
height: 930px;
background-repeat: no-repeat;
justify-content: center;
align-items: center;
`

const Button = styled.button`
    outline: none;
    height: 60px;
    width: 400px;
    border-width: 1px;
    border-radius: 30px;
    border-style: solid;
    align-items: center;
   
    padding: 7px 17px;
    margin: 15px 15px 15px;
    border: none;
    background: #fff;
    font-size: 17px;
   font-weight: 800;
`

const Title = styled.div`
    font-size: 17px;
    font-weight: 500;
    letter-spacing: -0.9px;
    margin-top: 2rem;

`


