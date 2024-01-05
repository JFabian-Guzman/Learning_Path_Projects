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
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      })
    }),
    logout:builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = usersApiSlice;