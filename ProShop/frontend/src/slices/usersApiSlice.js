import { USERS_URL } from "../constants"
import { apiSlice } from "./apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /*We are making a POST request, so...it is a mutation*/
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
      keepUnusedDataFor: 5
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;