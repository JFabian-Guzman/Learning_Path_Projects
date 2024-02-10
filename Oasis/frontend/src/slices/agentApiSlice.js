import { AGENTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const agentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAgetns: builder.query({
      query: () => ({
        url: AGENTS_URL,
      }),
      keepUnusedDataFor: 5
    }),
    getHouseDetails: builder.query({
      query: (agentsId) => ({
        url: `${AGENTS_URL}/${agentsId}`,
      }),
      keepUnusedDataFor: 5
    }),
  }),
})


export const { useGetAgetnsQuery, useGetHouseDetailsQuery } = agentsApiSlice;