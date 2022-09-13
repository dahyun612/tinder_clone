import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { Navigate,useNavigate } from "react-router-dom";
import './style.css';




const  TinderCards=()=> {
    const Navigate = useNavigate();
    //유저DB
    const [user,setUser] = useState([
        {
            name : '스티브 잡스',
            url : 'https://image.yes24.com/images/chyes/news/20111006/002.jpg'
        },
        {
            name : '일론 머스크',
            url : 'https://tago.kr/images/sub/TG300-D02_img01.png'
        },
        {
            name : '강민택',
            url : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxSM2k%2FbtrLVZmGgHY%2FKyaBggKSwv8mPzXvX9iAr0%2Fimg.jpg'
        },
        {
            name : '진',
            url : 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2022/07/PS22072600027.jpg'
        }
    ]);
    const [currentIndex, setCurrentIndex] = useState(user.length-1)

    //어느 방향으로 swip 했는지 기록
    const [lastDirection, setLastDirection] = useState()
    //console.log(lastDirection)

    const currentIndexRef = useRef(currentIndex)
    
    

    const childRefs = useMemo(
        () =>
          Array(user.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
      )

    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }  

    //돌아가는 기능
    const canGoBack = currentIndex < user.length - 1

    // 인덱스 >= 0
    const canSwipe = currentIndex >= 0

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
      }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < user.length) {
          await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
      }

    useEffect(()=>{        
        /* database.
        collection('people').
        onSnapshot((snapshot)=>(
            setUser(snapshot.docs.map(doc=>doc.data()))
        )) */
        //will run ONCE when the component load, and never agane
    },[]);

    //setUser([...user,'son','min'])

  return (
    <div>
      
      <StTinderCard>
       
        {user.map((person, index) => (

          <TinderCard
            className="swipe"
            ref={childRefs[index]}
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name, index)}
            onCardLeftScreen={() => outOfFrame(person.name, index)}
          >

            <Card
              style={{ backgroundImage: `url(${person.url})` }}
              className="card">
              <h3>{person.name}</h3>


               <SwipeButtonsContainer>
              <SwipeButtons__left onClick={() => swipe('left')}>X</SwipeButtons__left>
              <InfoButton onClick={() => { Navigate("/profiles") }} />
            </SwipeButtonsContainer>
            </Card>
           

          </TinderCard>

        ))}

      </StTinderCard>


    </div>

  )}

  export default TinderCards;


const StTinderCard = styled.div`
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



const Card = styled.div`
    width: 430px;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 5rem;
    border-radius: 12px;
`
const SwipeButtonsContainer = styled.div`
 
    border-radius: 12px;
    border: 1px solid #000;
`
const SwipeButtons__left =styled.button`
    width: 60px;
    height: 60px;
    border: 3px solid red;
    color: black;
    transform: scale(1.02);
    transition: all 0.3s ease-in-out 0s;
    
`
const InfoButton = styled.button`
width: 70px;
background: none;
height: 70px;

border: 1px solid transparent;
flex-direction: row;
align-items: center;
background-repeat: no-repeat;

`;
