import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 8rem;
  
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  background-color: rgba(0, 0, 0, .15);
  
  backdrop-filter: blur(2.5px);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 20rem;
  }

`