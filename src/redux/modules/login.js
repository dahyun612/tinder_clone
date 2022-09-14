import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


//async를 통한 비동기로 데이터를 받아오는 과정
export const __login = createAsyncThunk(
    "/member/login",
    //로그인을 시행하여 토큰 및 닉네임 정보를 받아옴
    async(payload,thunkAPI) => {
        try {
            const data = await axios.post("http://13.209.88.230:8080/member/login", payload)
            localStorage.setItem("token1",data.headers.authorization)
            localStorage.setItem("token",data.headers.refreshtoken)
            // localStorage.setItem("name",data.data)
            if(data.data.success===false)
            alert(data.data.error.message);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error){
            console.log()
            return thunkAPI.rejectWithValue(error);
        }
    }
);
//로그아웃을 통해 서버에서도 로그앙수 인지 및 토큰갱신
export const __logout = createAsyncThunk(
    "/member/logout",
    async (payload,thunkAPI) => {
        try {
            const data = await axios.post("http://13.209.88.230:8080/member/logout",{
                headers: {
                    Authorization: localStorage.getItem('token1'),
                    RefreshToken: localStorage.getItem('token2'),
              }})
        } catch (error) {

        }
    }
);

//createSlice를 통한 redux 생성 -store에서 사용할수 있는 내용 담고있음
export const login = createSlice({
    name:"login",
    initialState: {
        data:[],
        success:false,
        error:null,
        isLoading:false
    },
    reducers:{
        //로그아웃을 하면 로컬 스토리지의 토큰 및 닉네임 저장내용삭제
        logout(state){
            localStorage.removeItem("token1")
            localStorage.removeItem("token2")
            localStorage.removeItem("name")
        }
    },
    //내부에서 동작하는 함수 외외부에서 선언해준 함수 동작을 보조하는 기능
    extraReducers:{
        [__login.pending] : (state) => {
            state.isLoading = true;
        },
        [__login.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [__login.rejected]:(state,action) => {
            state.isLoading = false;
            state.error=action.payload;
        },
    },

})

export let {logout} = login.actions;
export default login;

