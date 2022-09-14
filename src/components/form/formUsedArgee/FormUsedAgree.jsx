import styled from "styled-components";
import { Navigate,useNavigate } from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react";

// 이용약관 체크 페이지 
const FormUsedAgree = () => {
    let Navigate = useNavigate();


    // const [checkList,setCheckList] = useState<String>([]);
    // const [buttoncolor,setButtonColor] = useState<Boolean>(false);

    // const checkAll = (e) => {
    //     e.target.checked
    //     ? setCheckList(["개인정보","위치정보","이용정보","3자정보","국외정보"])
    //     : setCheckList([]);

    // };
    // const check = (e) => {
    //     e.target.checked
    //     ? setCheckList([...checkList,e.target.name])
    //     : setCheckList(checkList.filter((choice) => choice !== e.target.name));

    // };

    // useEffect(()=> {
    //     if (  checkList.includes("개인정보") &&
    //           checkList.includes("위치정보") &&
    //           checkList.includes("이용정보") &&
    //           checkList.includes("3자정보") &&
    //           checkList.includes("국외정보")         
    //     ) {
    //         setButtonColor(true);
    //     }else{
    //         setButtonColor(false);
    //     }
    // },[checkList]);


    

  return (
            <div>
               
               <AgreeBox>
            <BackButton onClick={() => { Navigate("/signup") }}/>
                <Box>
            <div class="agree-wrap">
			<h1>이용약관</h1>
			<div class="ec-base-box typeThinBg gStrong">
			<p><span class="ec-base-chk">
            <input type="checkbox" id="sAgreeAllChecked"/>
            <em class="checkbox"></em></span><label for="sAgreeAllChecked">
            <strong>아래 항목에 전부 동의합니다.</strong></label></p>
            <div class="ec-base-box typeThinBg agreeArea">
				<div class="agree-title"> 
                </div>
                
            <p><span>
            <input type="checkbox" name="check1"/>
            </span> <strong>(필수)개인정보(위치정보 포함)의 수집 및 이용에 동의합니다.</strong></p>
            <p><span>
            <input type="checkbox" name="check2"/>
            </span> <strong>(필수)<Color>위치기반서비스</Color> 이용약관에 동의합니다.</strong></p>
            <p><span>
            <input type="checkbox" name="check3"/>
            </span> <strong>(필수)<Color>이용약관</Color>에 동의합니다.</strong></p>
            <p><span>
            <input type="checkbox" name="check4"/>
            </span> <strong>(필수)개인정보의 제3자 제공에 동의합니다.</strong></p>
            <p><span>
            <input type="checkbox"name="check5"/>
            </span> <strong>(필수)개인정보의 국외 이전에 동의합니다.</strong></p>

                    

            </div>
            </div>
			</div>
            </Box>
             <Info>
       
          <Button onClick={() => { Navigate("/main") }}>동의함</Button>
             </Info>
     
            </AgreeBox>
         </div>
  );
};

export default FormUsedAgree;

const BackButton = styled.button`
background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc5FozQ%2FbtrLPcBpLvL%2FwI1RjrG5rLhiegMHZ9dFE1%2Fimg.png");
    position: absolute;
    top: 20px;
    left: 20px;
    width: 36px;
    height: 36px;
    border: none;
    `
const Info =styled.div`
  margin-bottom: 20px;
  display: flex;
  position: absolute;
  bottom:180px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
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
    cursor: pointer;
`

const Color = styled.text`
color:red;
text-decoration: underline;
`


const AgreeBox = styled.div`
position: absolute;
left: 38%;
width:450px;
height: 930px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;
font-size: 22px;
color: #53535399;
border : 4px solid #eee;
border-radius: 12px;
text-align: left;
`;

const Box = styled.div`
position: absolute;
width:400px;
top:100px;
display: flex;
align-items: center;
justify-content: center;

`;