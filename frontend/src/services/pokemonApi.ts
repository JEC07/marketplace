import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

const getPokemonByName = async (name: string) => {
  try {
    const res = await fetch(API + `pokemon/${name}`)
    return await res.json()
  } catch {
    return 'Not found'
  }
}

const getPokemonsByType = async (type : string) => {
  try {
    const res = await fetch(API + `type/${type}`)
    const data = await res.json()
    return data.pokemon
  } catch {
    return 'Not found'
  }
}

const getPokemonsByAbility = async (ability: string) => {
  try {
    const res = await fetch(API + 'ability/' + ability)
    return await res.json()
  } catch {
    return 'Not found'
  }
}

export {
  getPokemonByName,
  getPokemonsByType,
  getPokemonsByAbility
}
