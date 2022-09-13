import styled from "styled-components";

const LoginHeader = () => {
  return (
    <div>
      <StHeader/>
      </div>
  );
};



const StHeader = styled.div`
  width:100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  background-repeat: no-repeat;
  box-sizing: inherit;
  `

export default LoginHeader;