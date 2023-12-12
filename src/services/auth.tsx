import { baseAPI } from "./baseApi";

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
    resetPassword: builder.mutation({
      query: (user: any) => ({
        url: "register",
        method: "POST",
        body: user,
      }),
    }),
    passCode: builder.mutation({
      query: (user: any) => ({
        url: "register",
        method: "POST",
        body: user,
      }),
    }),
    resendCode: builder.mutation({
      query: (user: any) => ({
        url: "register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation,useResetPasswordMutation ,usePassCodeMutation,useResendCodeMutation} = authAPI;
