import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//마이페이지 본인정보 받아오기
export const __getMember = createAsyncThunk (
    "profile/member/mypage",
    async (payload,thunkAPI) => {
        try {
            const data = await axios.get(`http://13.209.88.230:8080/profile/member/mypage`, payload,{
                headers : {
                    Authorization : localStorage.getItem('token1'),
                    RefreshToken: localStorage.getItem('token2'),
                }});
                return thunkAPI.fulfillWithValue(data.data);
        }catch (error){
            return thunkAPI.rejectWithValue(error.action);
        }
    }
);
//본인정보수정하기(닉네임변경)
export const __changeMember = createAsyncThunk(
    "profile/update/nickname",
    async (payload,thunkAPI) => {
        try {
            const data = await axios.put(`http://13.209.88.230:8080/profile/update/nickname`, payload,{
                headers : {
                    Authorization:localStorage.getItem('token1'),
                    RefreshToken: localStorage.getItem('token2'),
                }});
         console.log(data)
         localStorage.setItem("token1",data.headers.authorization)   
         localStorage.setItem("token2",data.headers.refreshToken)
         localStorage.setItem("name",data.data.data.nikeName)
         return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
//회원가입하기
export const __signUp = createAsyncThunk(
    "/member/signup",
    async (payload,thunkAPI) => {
        try {
            const data = await axios.post("http://13.209.88.230:8080/member/signup",payload,{
                headers : {
                    "Content-Type" : "multipart/form-data"  
             }});
            if(data.data.success===true)
            alert(data.data.data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const member = createSlice ({
    name:"member",
    initialState : {
        data:[],
        success:false,
        error:null,
        isLoading:false
    },
    reducers:{

    },
    //내부에서 동작하는 함수 외외부에서 선언해준 함수 동작을 보조하는 기능
    extraReducers : {
        [__getMember.pending]: (state) => {
            state.isLoading = true; //네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getMember.fulfilled]:(state,action) => {
            state.isLoading = false; //네트워크 요청이 끝났으니,false로 변경합니다. 
            state.data = action.payload;// state에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getMember.rejected]:(state,action) => {
            state.isLoading = false; //에러가 발생했지만,네트워크 요청이 끝났으니,false로 변경합니다. 
            state.error = action.payload;//catch 된 error 객체를 state.error에 넣습니다.  
        },

        [__changeMember.pending]: (state) => {
            state.isLoading = true;
        },
        [__changeMember.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [__changeMember.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export let { createMember, updateMember, likeMember } = member.actions;

export default member;