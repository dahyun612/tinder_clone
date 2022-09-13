import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState} from "react";
import { __login } from "../../../redux/modules/login";

//로그인페이지 여기서 로그인 하면 바로 메인페이지로 넘어감
const FormLogin = () => {
    let result = useSelector((state)=>state.login)
    let Navigate = useNavigate();
    let dispatch = useDispatch();
    let initialState = {
        id:"",
        password:""
    }
    let [member,setMember] = useState(initialState);

    const onChangeHandler = (event) => {
        const {name,value} = event.target;
        setMember({...member,[name]:value});
    };
    const onSubmit = () => {
        dispatch(__login(member));
    }

    // useEffect(()=> {
    //     if(result.data.success) {
    //         Navigate('/main');
    //     }
    // })
    return (
<div>
<StForm>
    <div>
         <Info>
     
            <Input placeholder="아이디"
                    onChange={onChangeHandler}
                    name="id"
                    value={member.id}
                    type="text"/>
            <Input placeholder="비밀번호"
                    onChange={onChangeHandler}
                    name="passWord"
                    value={member.passWord}
                    type="password"/>
          </Info>
            </div>
        <Button onClick={() => { Navigate("/main") }}>로그인</Button>
        </StForm>
            </div>

  

    )
};

export default FormLogin;


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

const Input = styled.input `
  border: none;
  border-radius: 30px;
  padding: 15px 20px;
  margin-bottom: 1rem;
  font-size: 15px;
  outline: 0;
  width: 350px;
  input.placeholder {
    text-align: left;
  }
  ::-webkit-input-placeholder {
    text-align: left;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    text-align: left;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }
  :-ms-input-placeholder {
    text-align: center;
  }
  :not([type="submit"]) {
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: border-color 0.3s ease-in-out;
    :focus {
      border-color: #ff002f;
    }
  }
`;


