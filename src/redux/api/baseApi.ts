import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1",
    //below the line set the cookies on browser
    credentials: "include",
  }),

  endpoints: () => ({}),
});
