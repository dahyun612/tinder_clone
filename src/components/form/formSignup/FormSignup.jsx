import {useState,useEffect} from "react";
import { Navigate,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __signUp } from "../../../redux/modules/member";
import { __chkId } from "../../../redux/modules/check/id";
import { __chkName } from "../../../redux/modules/check/name";

//회원가입페이지 회원가입시 이미지 업로드 미들웨어 되는지 확인해볼것 아닐시 이미지전용 미들웨어가 필요하면 구축할것
const FormSignup = () => {

    const userid = useSelector((state) => state.id);
    const username = useSelector((state)=> state.name);
    //const [gender, setGender] = useState<"M" | "F">("M");


    let Navigate = useNavigate();
    let dispatch = useDispatch();
    const [check,setCheck] = useState(false);
    const[pw,setPw] = useState("") 
    
    const[chkid, setChkid] = useState(false);   
    const[chkpw, setChkpw] = useState(false);
    const [chkname,setChkname] = useState(false);
    const [upload,setUpload] = useState(false)
    
    let regId = /^[0-9a-z]+$/;
    let regPw = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/
    let regName = /^[0-9가-힣a-zA-Z]+$/;;


    let initialState = {
        id: "",
        nickName: "",
        passWord: "",
        sex : "성별",
        img : "이미지",
        category : "관심카테고리"
    }

    let [member,setMember] = useState(initialState);
    //수정되는 내용과 member이 가진 값을 매칭하여 state변경
    const onChangeHandler = (event) => {
        const {name,value} = event.target;
        setMember({...member,[name]:value});
    };

    //form을 통한 제줄이라 submit
    const onSubmitHandler = (event) => {
        event.preventDefault();
        //아이디 닉네임 비밀번호 유효성검사(한글,숫자,영어,특수문자, 글자길이등)
        if(!chkid &&!chkname && !chkpw) {
            //중복검사 성공여부 유효성 검사
            if(userid.data.success &&username.data.success) {
                dispatch(__signUp(member));
                setMember(initialState);
                Navigate("/")
            }
            else {
                alert("중복확인 해주세요");
            } 
            }else {
                alert("양식에 맞는 정보인지 확익해주세요");
            }
        };
    // useEffect(() => {
    //     if (member.id !== "" && !regId.test(member.id))
    //         setChkid(true);
    //     else
    //         setChkid(false);
    // }, [member.id])
    //닉네임의 state가 변할때마다 유효성검사 시행
    // useEffect(() => {
    //     if (member.nickName !== "" && !regName.test(member.nikeName))
    //         setChkname(true);
    //     else
    //         setChkname(false);
    // },[member.nickName])
    // //패스워드의state가 변할때마다 유효성검사 시행
    // useEffect(() => {
    //     if (pw !== "" && member.passWord !== "" && member.passWord !== pw)
    //        setChkpw(true);
    //     else {
    //         if(!regPw.test(pw))
    //             setChkpw(true);
    //         if(!regPw.test(member.passWord))
    //             setChkpw(true);
    //         setChkpw(false);
    //     }
    // })

    // useEffect를 통한 불필요한 비동기 동작 제어
    useEffect(() => {
        // 토큰이 존재하지않으면 로그인창으로 방출
        if(localStorage.getItem("token1")===null){
            Navigate("/login")
        }
        if(localStorage.getItem("token2")===null){
            Navigate("/login")
        // 토큰 내용을 확인하여 이미지 및 정보를 불러옴
        }else{
            dispatch(__getMember(result));
            dispatch(__getimage());
        }
    }, [dispatch]);

    const img = useSelector((state)=>state.image)
    var fileForm = /(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/;

    const onChange = async(e) => {
        // input file에서 선택된 file을 img로 지정
        const img = e.target.files[0];
        // 이미지 파일이 아니면 이후 동작을 생략하고 경고문구 출력
        if(!img.name.match(fileForm)){
            alert("이미지파일(.jpg, .png, .bmp)만 올려주세요.")
            return
        }
        // 폼데이터 형식 선언
        const formData = new FormData();
        // api에서 요구하는 key값과 value값 지정 (key : "image", value: 이미지파일)
        formData.append('image',img);
        // 이미지만 보내면되기때문에 더이상 append하지않고 이미지파일 전송
        dispatch(__image(formData));
        // 사진을 선택하고 사진선택기능 숨기기
        setUpload(false);
        // 폼데이터 들어가는 형식을 보기위한 내용
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }
    }
    
    
    return (
        
        <AddInputGroup>
        <form onSubmit={onSubmitHandler} className="add-form">
        <div>
            <h1>회원가입</h1>
        <Label>
            <Input
            placeholder="아이디를 입력해주세요"
            onChange={onChangeHandler}
            name=""id
            type="text"/>
            <CkButton type = "button"
            onClick={()=> {
                dispatch(__chkId({id:member.id}));
                console.log(member.id);
            }}>중복확인</CkButton>
            </Label>
        {chkid?
            <p style={{color:"red"}}>아이디를 확인해주세요.(영문,숫자)</p> :null}
        
        <div>
        <Label>
        <Input
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangeHandler}
            name="password"
            value={member.passWord}
            type="password"/>
        </Label>
        </div>
        
        <div>
        <Label>
            <Input
            placeholder="비밀번호를 확인해주세요"
            onChange={(e)=> {setPw(e.target.value)}}
            name="passwordConfirm"
            value={pw}
            type="password"/>
        </Label>
        </div>
        {chkpw?
        <p style={{color:"red"}}>패스워드를 입력해주세요</p> :null}
        <div>
        <Label>
            <Input
            placeholder="닉네임을 적어주세요"
            onChange={onChangeHandler}
            name="nikeName"
            value={member.nickName}
            type="text"/>
            <CkButton type="button"
            onClick={()=> {
                dispatch(__chkName({nickName: member.nickName}));
                console.log(member.nickName)
            }}>중복확인</CkButton>
        </Label>
        {chkname ?
        <p style={{color:"red"}}>닉네임을 확인해주세요.(한글,영문,숫자)</p> :null}
        </div>


        <div>
        <Label>
            <div>성별</div>
          <StButton>남자</StButton>
           <StButton>여자</StButton>
           <div>사진을 등록해주세요</div>
           {upload?
           <PhotoInput
                type='file' 
                accept='image/*' 
                name='profile_img' 
                onChange={onChange}/>
                :null}
                < CkButton onClick={()=>{
                    if(!upload) {setUpload(true);}
                    else {setUpload(false);}
                }}>프로필사진업로드</ CkButton>
         </Label>
        </div>
        <NextButton onClick={() => { Navigate("/useagree") }}>다음단계</NextButton>
        
        </div>
        </form>
        </AddInputGroup>
        
    )

}

export default FormSignup;

const StButton = styled.button`
    
    outline: none;
    height: 50px;
    width: 400px;
    border-radius: 30px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-style: solid;
    align-items: center;
    color :#9b9b9b99;
    background: none;
    border: 1px solid #9b9b9b99;
    font-size: 20px;
    font-weight: 800;
    &:focus {
    border: 1px solid #f34967;  ;
    background-color: #fff;
    color: #C30D23;
    
    }
  
`

const Input = styled.input `
  border: none;
  border-radius: 30px;
  padding: 15px 20px;
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
      border-color: #f34967;
    }
  }
`;



const Label = styled.label`
  
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AddInputGroup = styled.div`
position: absolute;
left: 38%;
width:450px;
height: 930px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;
border : 4px solid #eee;
border-radius: 12px;

`;


const CkButton = styled.button`
    border:none;  
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    text-transform: uppercase;
    z-index: 10px;
    top:165px;
    right: 50px;
    cursor: pointer;
    background-color: #fff;
    &:hover {  
    background-color: #fff;
    color: #333;
    font-size: 15px;
    }
`;

const PhotoInput = styled.img`
width: 100px;
margin-top:1rem;
margin-bottom: 1rem;
height: 120px;
background: #acacac;
border-radius: 30px;
`
const NextButton = styled.button`
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



