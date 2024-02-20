import { AGENTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const agentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAgents: builder.query({
      query: ({keyword, pageNumber}) => ({
        url: AGENTS_URL,
        params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 5
    }),
  }),
})


export const { useGetAgentsQuery } = agentsApiSlice;