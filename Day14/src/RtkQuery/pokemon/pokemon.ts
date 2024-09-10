import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'


type TPokemon = {
    abilities: {
        ability: {
            name: string
        }
    }[] //abilities is an array
    }


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<TPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    // getSabin: builder.query<any, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

//reducerPath , slice jastai ho
//baseQuery, axios jastai kaam gar6
//endpoints, query build gar6
//getPokemonByName, builder.query yesle query build gar6
//query, object vitra callback dincha teha actual route lekhne
// pokemonApi.useGetSabinQuery
// export const { useGetSabinQuery } = pokemonApi
pokemonApi.useGetPokemonByNameQuery
export const { useGetPokemonByNameQuery } = pokemonApi