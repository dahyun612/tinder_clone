import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../components/form/formLogin/Start";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Agrees from "../pages/Agrees";
import { AnimatePresence } from "framer-motion";
import Chat from "../pages/Chat";
import ChatScreen from "../components/chat/ChatScreen";
import Profiles from "../pages/Profiles";
import UseAgree from "../pages/UseAgree";
import Login from "../pages/Login";

const Router = () => {
    return(
        <Routes>
            <Route path="/" exact element={<Start />} />
            <Route path="/login" exact element={<Login />} />
           <Route path="/signup" exact element={<Signup />} />
           <Route path="/main" exact element={<Main />} />
           <Route path="/mypage" exact element={<Mypage />} />
           <Route path="/agrees" exact element={<Agrees />} />
           <Route path="/useagree" exact element={<UseAgree />} />           
            <Route path="/chat" exact element={<Chat />} />
            <Route path="/chat/:person" exact element={<ChatScreen />} />
            <Route path="/profiles" exact element={<Profiles />} />
            
        </Routes>

    )

}

export default Router;
