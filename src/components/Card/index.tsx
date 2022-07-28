import { useEffect, useState } from 'react';
import axios from 'axios';

import Buba from '../../assets/bubassauro.png';
import Grass from '../../assets/icon-grass.svg';

import { CardContainer, CardHeader, PokePhoto, PokeTypes } from './styles';

interface PokeCardProps {
  url: string
}

type Pokemon = {
  name: string,
  photoUrl: string,
  types: string[]
}

export function PokeCard({ url }: PokeCardProps){
  const [pokemon, setPokemon] = useState<Pokemon>()

  // const image = pokemonData.sprites.other['official-artwork'].front_default

  useEffect(() => {
    axios({
      method: "get",
      url: url
    }).then(response => {
      const pokeName = response.data.name;
      const pokePhoto = response.data.sprites.other['official-artwork'].front_default
      const pokeTypes: string[] = response.data.types.map((type: any) => type.type.name)
      const newPokemon = {
        name: pokeName,
        photoUrl: pokePhoto,
        types: pokeTypes
      }
      setPokemon(newPokemon)
    })
  }, [])

  console.log(pokemon)

  return (
    <CardContainer>
      <CardHeader>
        <img src={Grass}/>
        <p>{pokemon?.name}</p>
      </CardHeader>
      
      <PokePhoto >
        <img src={pokemon?.photoUrl}/>
      </PokePhoto>

      <PokeTypes >
        <span>{pokemon?.types.map(type => type).join(' | ')}</span>
      </PokeTypes>
    </CardContainer>
  )
}