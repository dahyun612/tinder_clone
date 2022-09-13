import React, { useState } from 'react'
import styled from 'styled-components'

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name:"Jin",
            image:"https://img.hankyung.com/photo/202108/BF.27314751.1.jpg",
            message:"안녕!",
        },
        {
            name:"Jin",
            image:"https://img.hankyung.com/photo/202108/BF.27314751.1.jpg",
            message:"지금 뭐해!",
        },
        {            
            message:"번달 번줌 ?",
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message : input }]);
        setInput('');
    }

  return (
    <div>
      <TimeStamp>... 분 전에 매치 되었습니다.</TimeStamp>
      
      {messages.map((message)=>(
        message.name?(
            
            <Screenbox>
                <div>                
                <ImgBox src={message.image} /> {message.name}
                <YouMessage>{message.message}</YouMessage>
                </div>
            </Screenbox>
        ):(
            <Screenbox>
                <MyMessage>{message.message}</MyMessage>
            </Screenbox>
        )
      ))}
      <ChatContainer>
            <Input value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메세지를 입력하세요..."
            type="text"
            />
            <InputButton onClick={handleSend}>전송</InputButton>
      </ChatContainer>
      
    </div>
  )
}

export default ChatScreen

const ChatContainer = styled.div`
width:450px;
height: auto;
margin: 0 auto;
margin-top: 4rem;
border-width: 2px;
border : 4px solid #eee;
border-radius: 12px;
padding:12px 24px 24px 24px;
background-size: 240px;
`


const TimeStamp = styled.p`
    text-align:center;
    padding: 20px;
    color: gray;
`
const Screenbox = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`

const InputButton = styled.button`
outline: none;
    border-width: 1px;
    border-radius: 12px;
    border-style: solid;
    padding: 7px 17px;
    margin: 15px 15px 15px;
    border: none;
    background: #C30D23;
    font-size: 15px;
    font-family: 'Yeon Sung', cursive;
    color: rgb(255, 255, 255);
    
`

const ImgBox = styled.img`
    width: 40px;
    height: 40px; 
    border-radius: 70%;
    overflow: hidden;   
`

const MyMessage = styled.p`
    margin-left: auto;
    background-color: #29b3cd;
    padding: 15px;
    border-radius: 20px;
    color: white;
`

const YouMessage = styled.p`
    margin-left: 10px;
    background-color: lightgray;
    padding: 15px;
    border-radius: 20px;
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
`