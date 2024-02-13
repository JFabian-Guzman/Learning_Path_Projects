import { HOUSES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: () => ({
        url: HOUSES_URL,
      }),
      keepUnusedDataFor: 5
    }),
    getHouseDetails: builder.query({
      query: (houseId) => ({
        url: `${HOUSES_URL}/${houseId}`,
      }),
      keepUnusedDataFor: 5
    }),
    createHouse: builder.mutation({ 
      query: (data) => ({
        url: HOUSES_URL,
        method: 'POST',
        body: data,
        }),
      invalidatesTags: ['House'], // Invalidates the cache for the 'House' tag
    }),
  }),
})


export const { 
  useGetHousesQuery,
  useGetHouseDetailsQuery,
  useCreateHouseMutation
} = productsApiSlice;