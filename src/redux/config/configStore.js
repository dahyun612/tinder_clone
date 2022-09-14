import { configureStore } from '@reduxjs/toolkit'
import member from '../modules/member'
import login from '../modules/login'
// import값을 .reducer로 넘겨줄시에는 밑에 리듀서에 .reducer적지 말 것
export default configureStore({
    reducer: { 
        
        member: member.reducer,
        login: login.reducer
        
    }
})