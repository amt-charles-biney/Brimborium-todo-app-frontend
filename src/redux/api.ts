/* import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginData, LoginResponse } from "../models/authentication";

export const authentication = createApi({
  reducerPath: "authentication",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginData>({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation } = authentication;
 */