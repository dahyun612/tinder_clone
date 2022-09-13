import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const __chkId = createAsyncThunk(
    "api/member/chkId",
    async(payload,thunkAPI) => {
        try {
            console.log(payload);
            const data = await axios.post("http://3.34.5.30:8080/api/member/chkId", payload);
            if(data.data.success===true)
            alert(data.data.date);
            else
            alert(data.data.error.messege);
            console.log(data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
            }} 
);

export const id = createSlice ({
    name:"member",
    initialState: {
        data:[],
        success:false,
        error:null,
        isLoading:false
    },
    reducers:{
        resetID(state){
            state = {
                data:[],
                success:false,
                error:null,
                isLoading:false
            }
        }
    },
    extraReducers:{
 [__chkId.pending]:(state) => {
    state.isLoading = true;
 },
 [__chkId.fulfilled] : (state,action) => {
    state.isLoading= false;
    state.data = action.payload;
 },
 [__chkId.rejected] : (state,action) => {
    state.isLoading =  false;
    state.error = action.payload;
 },

    },

})

export default id;