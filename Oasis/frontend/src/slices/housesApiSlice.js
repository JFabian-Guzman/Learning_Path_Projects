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
  }),
})


export const { useGetHousesQuery, useGetHouseDetailsQuery } = productsApiSlice;