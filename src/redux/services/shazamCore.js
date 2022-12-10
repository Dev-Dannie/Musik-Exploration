import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// simplifying options and fetch for api call to be exported to redux store 

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '15ce7ee347msh1899bb05c466eb0p1ee182jsnbf71559de000')
            
              return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () =>'/charts/world' }),
            getSongDetails: builder.query({ query: 
                ({songid}) =>`/tracks/details?track_id=${songid}` }),
                getSongRelated: builder.query({ query: 
                    ({songid}) =>`/tracks/related?track_id=${songid}` }),
        }),
    })

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
    } = shazamCoreApi;