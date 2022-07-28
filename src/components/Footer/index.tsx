import { FooterContainer } from './styles'

import PokeIcon from '../../assets/poke-icon.svg'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <img src={PokeIcon}/>
        <p>PokéDex</p>  
      </div>
    </FooterContainer>
  )
}