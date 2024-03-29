import { HOUSES_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: ({keyword, pageNumber}) => ({
        url: HOUSES_URL,
        params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Houses'], // Remember add invalidateTags in updateHouse
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
    uploadHouseImage: builder.mutation({
      query: (data) => ({
        url: UPLOAD_URL,
        method: 'POST',
        body: data,
      }),
    }),
    getLastHouses: builder.query({
      query: () => ({
        url: `${HOUSES_URL}/last`,
      }),
      keepUnusedDataFor: 5
    }),
  }),
})


export const { 
  useGetHousesQuery,
  useGetHouseDetailsQuery,
  useCreateHouseMutation,
  useUploadHouseImageMutation,
  useGetLastHousesQuery,
} = productsApiSlice;