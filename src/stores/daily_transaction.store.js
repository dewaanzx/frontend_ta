import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useDailyTransactionStore = defineStore({
  id: "daily_transaction",
  state: () => ({
    daily_transactions: [],
    daily_transaction: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/daily-transaction`;

      const daily_transactions = await axiosWrapper.get(url);

      if (daily_transactions) {
        this.daily_transactions = daily_transactions;
      }
    },
  },
});
