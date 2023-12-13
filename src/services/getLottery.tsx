import { baseAPI } from "./baseApi";
import { ENDPOINTS } from "@root/config/endpoints";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLottery: builder.query({
      query: (type: any) => `${ENDPOINTS?.getLottery}?lotteryType=${type}`,
    }),
  }),
});

export const { useGetLotteryQuery } = authAPI;
