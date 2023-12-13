import { baseAPI } from "./baseApi";


//----------- currently this is the dummay rtk query auth api--------

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: any) => ({
        url: "auth/signin",
        method: "PUT",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (user: any) => ({
        url: "register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authAPI;
