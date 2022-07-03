import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Ability, Search } from '../typescript/types'

const API = 'https://pokeapi.co/api/v2/'

interface Response {
  count: number,
  next: string,
  previous: string,
  results: [{
    name: string
    url: string
  }]
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getPokemons: builder.query<Response, string>({
      query: (url) => {
        if (!url) url = 'pokemon?limit=25&offset=0'
        return url
      }
    }),
    getPokemonsTypes: builder.query<any, void>({
      query: () => 'type'
    }),
    getPokemonsAbilities: builder.query<any, void>({
      query: () => 'ability'
    })
  })
})

export const {
  useGetPokemonsQuery,
  useGetPokemonsTypesQuery,
  useGetPokemonsAbilitiesQuery
} = pokemonApi

const getPokemonByName = async (name: string): Promise<any> => {
  try {
    const res = await fetch(API + `pokemon/${name}`)
    const data = await res.json()
    return data
  } catch {
    return undefined
  }
}

interface PokemonSearch {
  pokemon: Search
}

const getPokemonsByType = async (type : string): Promise<PokemonSearch[]> => {
  try {
    const res = await fetch(API + `type/${type}`)
    const data = await res.json()
    return data.pokemon
  } catch {
    return []
  }
}

const getPokemonsByAbility = async (ability: string): Promise<PokemonSearch[]> => {
  try {
    const res = await fetch(API + 'ability/' + ability)
    const data: Ability = await res.json()
    return data.pokemon
  } catch {
    return []
  }
}

const getAbilitySummary = async (ability: string): Promise<any> => {
  try {
    const res = await fetch(API + 'ability/' + ability)
    const data: Ability = await res.json()
    return data.effect_entries
  } catch {
    return undefined
  }
}

export {
  getPokemonByName,
  getPokemonsByType,
  getPokemonsByAbility,
  getAbilitySummary
}
