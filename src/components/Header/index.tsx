import { HeaderContainer } from './styles'

import Pokedex from '../../assets/pokedex.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Pokedex}/>
    </HeaderContainer>
  )
}