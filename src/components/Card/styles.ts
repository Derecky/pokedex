import styled, { css, ThemeConsumer, useTheme } from "styled-components";

interface CardContainerProps {
  background: string | undefined,
  border: string | undefined
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem 1rem;
  background-color: ${props => props.background};

  width: 17rem;
  height: 25rem;

  border-radius: 16px;
  border: 3px solid ${props => props.border};

  transition: transform 0.4s;

  :hover {
    transform: scale(1.025);
  }
`
interface Type {
  type: string | undefined
}

export const CardHeader = styled.div<Type>`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-family: 'Alfa Slab One';
    font-size: 1.5rem;
    color: ${(props) => props.type === 'dark' ? props.theme.white : props.theme.gray};
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

interface TypesProp {
  color1: string | undefined,
  color2: string | undefined,
}

export const PokeTypes = styled.div<TypesProp>`
  display: flex;
  justify-content: center;
  align-items: center ;

  height: 2.5rem;
  border-radius: 5rem;

  background-image: linear-gradient(
    to right,  
    ${props => props.color1}, 
    ${props => props.color2}
  );
`