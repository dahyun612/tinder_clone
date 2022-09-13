import styled from "styled-components";
import { Navigate,useNavigate } from "react-router-dom";


const FormAgree = () => {
    let Navigate = useNavigate();


  return (
    <div>
      <StAgree>
        <Info>
      <Button onClick={() => { Navigate("/signup") }}>동의함</Button>
      </Info>
      </StAgree>
      </div>
  );
};



const StAgree = styled.div`
background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZVnYb%2FbtrLQxd2zm7%2FNAuK7GftVsoBEEtNkBZJx1%2Fimg.png") center center ;
height: 930px;
background-repeat: no-repeat;
justify-content: center;
align-items: center;

`
const Info =styled.div`
    margin-top: 50rem;
    width: 430px;
    display: inline-block;
    color: white;
    font-size: 15px;
    `

const Button = styled.button`
    outline: none;
    height: 60px;
    width: 400px;
    border-radius: 30px;
    border-style: solid;
    align-items: center;
    color : #fff;
    border: none;
    background:#ff5555;
    font-size: 22px;
    
    font-weight: 800;
`
export default FormAgree;