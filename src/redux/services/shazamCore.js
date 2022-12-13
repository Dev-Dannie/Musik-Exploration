import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// simplifying options and fetch for api call to be exported to redux store 

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'f95fea9779msh2e0ab5a4ac0fde5p1694e3jsn5358128b78f2')
            
              return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () =>'/charts/world' }),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
            getSongDetails: builder.query({ query: 
                ({songid}) =>`/tracks/details?track_id=${songid}` }),
                getSongRelated: builder.query({ query: 
                    ({songid}) =>`/tracks/related?track_id=${songid}` }),
                    getArtistDetails: builder.query({ query: 
                        (artistId) =>`/artists/details?artist_id=${artistId}` }),
                        getSongsByCountry: builder.query({query: 
                        (countryCode) => `/charts/country?country_code=${countryCode}`}),
                        getSongsBySearch: builder.query({query: (searchTerm) => `
                        /search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
        }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongsByGenreQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsBySearchQuery,
    } = shazamCoreApi;