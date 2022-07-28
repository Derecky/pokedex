import axios from 'axios'
import { useEffect, useState } from 'react'

import { PokeCard } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { HomeContainer } from './styles'

export function Home () {
  const [pokemons, setPokemons] = useState<any[]>([]);
  
  useEffect(() => {
    axios({
      method: "get",
      url: 'https://pokeapi.co/api/v2/pokemon?limit=150'
    }).then(response => {
      setPokemons(response?.data.results)
    })
  }, [])

  return(
    <HomeContainer>
      <Header />
      <main>
        {pokemons.map(pokemon => <PokeCard key={pokemon.name} url={pokemon.url}/>)}
      </main>
      <Footer />
    </HomeContainer>
  )
}