import styled from "styled-components";
import { Navigate,useNavigate } from "react-router-dom";
import { useState } from "react";

const Profile = () => {

    const Navigate = useNavigate();

    const [user,setUser] = useState([
        {
            name : '',
            url : '',
            memo : ''
        }
  
    ]);




    return (
        <div>
        <TindercardContainer>
          {user.map((person, index)=>(
               <Label>
                <Card 
                style={{ backgroundImage: `url(${person.url})`}}
                className="card"
                onClick={() => { Navigate("/main") }}>
                <ProfileBox>
                <h3>{person.name}</h3>
                <h3>{person.memo}</h3>
                </ProfileBox>
                </Card>
                
                </Label>
            
          ))}
          
          </TindercardContainer>
          </div>
    
      )}
    

export default Profile;

const TindercardContainer = styled.div`
display: flex;
margin-top: 4rem;
margin-bottom: 5rem;
border : 4px solid transparent;
border-radius: 12px;
padding:12px 12px 12px 12px;
background-size: 240px;

`;
const Label = styled.div`
width: 375px;
height: 500px;
display: inline-block;
margin-top: 1rem;
margin-bottom: 5rem;
border : 4px solid transparent;
border-radius: 12px;
padding:12px 12px 12px 12px;
`;
const ProfileBox = styled.div`
margin-top: 1rem;
;
    
`

const Card =styled.div`
    width: 375px;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 5rem;
`