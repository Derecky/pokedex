import { defaultTheme } from "../styles/themes/default";

export const selectBackgroundColors = (type: string | undefined) =>  {
  switch(type){
    case 'grass': return defaultTheme["bg-grass"]
    case 'water': return defaultTheme["bg-water"]
    case 'fire': return defaultTheme["bg-fire"]
    case 'normal': return defaultTheme["bg-normal"]
    case 'bug': return defaultTheme["bg-bug"]
    case 'poison': return defaultTheme["bg-poison"]
    case 'electric': return defaultTheme["bg-electric"]
    case 'ground': return defaultTheme["bg-ground"]
    case 'flying': return defaultTheme["bg-flying"]
    case 'fighting': return defaultTheme["bg-fighting"]
    case 'psychic': return defaultTheme["bg-psychic"]
    case 'rock': return defaultTheme["bg-rock"]
    case 'ghost': return defaultTheme["bg-ghost"]
    case 'ice': return defaultTheme["bg-ice"]
    case 'dragon': return defaultTheme["bg-dragon"]
    case 'steel': return defaultTheme["bg-steel"]
    case 'dark': return defaultTheme["bg-dark"]
    case 'fairy': return defaultTheme["bg-fairy"]
  }
}

export const selectPillDarkColors = (type: string) =>  {
  switch(type){
    case 'grass': return defaultTheme["pd-grass"]
    case 'water': return defaultTheme["pd-water"]
    case 'fire': return defaultTheme["pd-fire"]
    case 'normal': return defaultTheme["pd-normal"]
    case 'bug': return defaultTheme["pd-bug"]
    case 'poison': return defaultTheme["pd-poison"]
    case 'electric': return defaultTheme["pd-electric"]
    case 'ground': return defaultTheme["pd-ground"]
    case 'flying': return defaultTheme["pd-flying"]
    case 'fighting': return defaultTheme["pd-fighting"]
    case 'psychic': return defaultTheme["pd-psychic"]
    case 'rock': return defaultTheme["pd-rock"]
    case 'ghost': return defaultTheme["pd-ghost"]
    case 'ice': return defaultTheme["pd-ice"]
    case 'dragon': return defaultTheme["pd-dragon"]
    case 'steel': return defaultTheme["pd-steel"]
    case 'dark': return defaultTheme["pd-dark"]
    case 'fairy': return defaultTheme["pd-fairy"]
  }
}

export const selectPillLightColors = (type: string) =>  {
  switch(type){
    case 'grass': return defaultTheme["pl-grass"]
    case 'water': return defaultTheme["pl-water"]
    case 'fire': return defaultTheme["pl-fire"]
    case 'normal': return defaultTheme["pl-normal"]
    case 'bug': return defaultTheme["pl-bug"]
    case 'poison': return defaultTheme["pl-poison"]
    case 'electric': return defaultTheme["pl-electric"]
    case 'ground': return defaultTheme["pl-ground"]
    case 'flying': return defaultTheme["pl-flying"]
    case 'fighting': return defaultTheme["pl-fighting"]
    case 'psychic': return defaultTheme["pl-psychic"]
    case 'rock': return defaultTheme["pl-rock"]
    case 'ghost': return defaultTheme["pl-ghost"]
    case 'ice': return defaultTheme["pl-ice"]
    case 'dragon': return defaultTheme["pl-dragon"]
    case 'steel': return defaultTheme["pl-steel"]
    case 'dark': return defaultTheme["pl-dark"]
    case 'fairy': return defaultTheme["pl-fairy"]
  }
}