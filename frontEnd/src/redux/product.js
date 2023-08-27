// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    // @ts-ignore
    baseUrl: `${import.meta.env.VITE_BASE_RENDER_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getproductsByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

// // Get only onr product
// export const oneproductsApi = createApi({
//   reducerPath: "oneproductsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:9000/",
//   }),
//   endpoints: (builder) => ({
//     getOneProduct: builder.query({
//       query: (name) => `products/${name}`,
//     }),
//   }),
// });

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproductsByNameQuery } = productApi;
// export const { useGetOneProductQuery } = oneproductsApi;