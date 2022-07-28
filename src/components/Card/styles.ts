import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem 1rem;
  background-color: var(--green-100);

  width: 17rem;
  height: 25rem;

  border-radius: 16px;
  border: 3px solid var(--green-500);

  transition: transform 0.4s;

  :hover {
    transform: scale(1.025);
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-family: 'Alfa Slab One';
    font-size: 1.5rem;
    color: var(--gray-700);
  }
`

export const PokePhoto = styled.div`
  max-width: 15rem;
  max-height: 15rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 15rem;
    height: 15rem;  
    
    object-fit: contain;
  }
`

export const PokeTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center ;

  height: 2.5rem;
  border-radius: 5rem;
  
  background-image: linear-gradient(to right, var(--green-500) , var(--purple-500));
`