import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 8rem;
  
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  background-color: rgba(0, 0, 0, .15);
  
  backdrop-filter: blur(2.5px);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0rem 8rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    p {
      font-size: 2rem;
    }
  }
`