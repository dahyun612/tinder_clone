import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Chat({ name, message, timestamp, profilePic }) {
  //https://www.youtube.com/watch?v=DQfeB_FKKkc&t=9s&ab_channel=CleverProgrammer
  return (
    <ChatLink to ={`/chat/${name}`} vlink="gray">
            <ChatBox>
              <ChatImg src={profilePic}/>
                
                <ChatDetails>
                    <ChatName>{name}</ChatName>
                    <ChatDetails_P>{message}</ChatDetails_P>
                </ChatDetails>
                <ChatTimeStamp>{timestamp}</ChatTimeStamp>
            </ChatBox>
        </ChatLink>
  );
}

export default Chat;
const ChatBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 70px;
    border-bottom: 1px solid rgb(236, 236, 236);
`
const ChatDetails = styled.div`
  flex: 1;
`

const ChatName = styled.h3`
  color:black;
`

const ChatDetails_P = styled.p`
   color: gray;
`

const ChatTimeStamp = styled.p`
   color: lightgray;
`

const ChatImg = styled.img`
    width: 50px;
    height: 50px; 
    border-radius: 70%;
    overflow: hidden;
    margin-right: 23px;
`

const ChatLink = styled(Link)`
  text-decoration-line : none;
`