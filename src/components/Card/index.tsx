import { useEffect, useState } from 'react';
import axios from 'axios';

import Grass from '../../assets/icon-grass.svg';

import { CardContainer, CardHeader, PokePhoto, PokeTypes } from './styles';
import { selectBackgroundColors, selectPillDarkColors, selectPillLightColors } from '../../helpers/ColorbyTypes';

interface PokeCardProps {
  url: string
}

type Pokemon = {
  name: string,
  photoUrl: string,
  types: string[],
  pillColors?: {
    color1?: string,
    color2?: string
  }
}

export function PokeCard({ url }: PokeCardProps){
  const [pokemon, setPokemon] = useState<Pokemon>()

  useEffect(() => {
    axios({
      method: "get",
      url: url
    }).then(response => {
      const pokeName = response.data.name;
      const pokePhoto = response.data.sprites.other['official-artwork'].front_default
      const pokeTypes: string[] = response.data.types.map((type: any) => type.type.name)
      const pillColor = selectPillColors(pokeTypes);
      const newPokemon = {
        name: pokeName,
        photoUrl: pokePhoto,
        types: pokeTypes,
        pillColors: pillColor
      }
      setPokemon(newPokemon)
    })
  }, [])

  function selectPillColors (pokeTypes: string[]) {
    // const typesPills = pokeTypes.map( type => selectColors(type));
    if(pokeTypes.length > 1) {
      return {
        color1: selectPillDarkColors(pokeTypes[0]),
        color2: selectPillLightColors(pokeTypes[1])
      }
    }
    else  {
      return {
        color1: selectPillDarkColors(pokeTypes[0]),
        color2: selectPillLightColors(pokeTypes[0])
      }
    }
  }

  return (
    <CardContainer
      background={selectBackgroundColors(pokemon?.types[0])}
      border={pokemon?.pillColors?.color1}
    >
      <CardHeader type={pokemon?.types[0]}>
        <img src={Grass}/>
        <p>{pokemon?.name}</p>
      </CardHeader>
      
      <PokePhoto >
        <img src={pokemon?.photoUrl}/>
      </PokePhoto>

      <PokeTypes 
        color1={pokemon?.pillColors?.color1} 
        color2={pokemon?.pillColors?.color2}
      >
        <span>{!!pokemon && pokemon.types.map(type => type).join(' | ')}</span>
      </PokeTypes>
    </CardContainer>
  )
}