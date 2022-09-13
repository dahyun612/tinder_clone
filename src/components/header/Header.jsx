import styled from "styled-components";
import { Navigate,useNavigate } from "react-router-dom";







const Header = () => {
    const Navigate = useNavigate();
  return (
    <div>
            <div>
            <HeaderBox>
             <Title_Logo src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png" onClick={() => { Navigate("/") }}></Title_Logo>
                <div>
                <StHeadbtn onClick={() => { Navigate("/mypage") }}>마이페이지</StHeadbtn>
                <StHeadbtn onClick={() => { Navigate("/") }}>로그아웃</StHeadbtn>
                </div>
            </HeaderBox>
            </div>
           
        </div>
  );
};





export default Header;



const HeaderBox = styled.form`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    margin: 15px 15px 15px;

`;


const StHeadbtn = styled.button `
outline: none;
    border-width: 1px;
    border-radius: 12px;
    border-style: solid;
    padding: 7px 17px;
    margin: 15px 15px 15px;
    border: none;
    background: #C30D23;
    font-size: 20px;
    
    color: rgb(255, 255, 255);
    &:hover {
    border: 3px solid #C30D23  ;
    background-color: #fff;
    color: #C30D23;
    }
    
`;

const Title_Logo = styled.img`
margin-top:2rem;
height:80px;

`