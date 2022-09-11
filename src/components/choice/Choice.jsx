import styled from "styled-components";
import React from "react";
import { Navigate , useNavigate} from "react-router-dom";



const Choice = () => {
   
    return(

        <div>
            <StContainer>
                <h2>동무의 취향</h2>
           <ChButton>키컸으면 해</ChButton>
           <ChButton>웃겼으면 해</ChButton>
           <ChButton>잘생겼으면 해</ChButton>
           <ChButton>야했으면 해</ChButton>
           <ChButton>잘 씻었으면 해</ChButton>
           <ChButton>돈많았으면 해</ChButton>
           <ChButton>다정했으면 해</ChButton>
           <ChButton>종교믿었으면 해</ChButton>
           <ChButton>건치였으면 해</ChButton>
           <ChButton>건강했으면 해</ChButton>
            </StContainer>
            <Button onClick={() => { Navigate("/main") }}>고조 가보자우</Button>
        </div>
        
    )
}

export default Choice;


const StContainer = styled.div`
width:450px;
margin: 0 auto;
margin-top: 4rem;
border : 4px solid #eee;
border-radius: 12px;
padding:12px 24px 24px 24px;
background-size: 240px;

`;
const ChButton = styled.button `
    outline: none;
    border-width: 1px;
    border-radius: 12px;
    border-style: solid;
    padding: 7px 17px;
    margin: 15px 15px 15px;
    border: none;
    background: orange;
    font-size: 20px;
    
    color: rgb(255, 255, 255);
    &:focus {
    outline: 3px dashed orange;
    outline-offset: 10px;
    }
    
`;
const Button = styled.button`
    outline: none;
    border-width: 1px;
    border-radius: 12px;
    border-style: solid;
    padding: 7px 17px;
    margin: 15px 15px 15px;
    border: none;
    background: #ff87df;
    font-size: 24px;
    font-family: 'Yeon Sung', cursive;
    color: rgb(255, 255, 255);
    &:hover {
    border: 3px solid #ff87df  ;
    background-color: #fff;
    color: #C30D23;
    }
    
`




