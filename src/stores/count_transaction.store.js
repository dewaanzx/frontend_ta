import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCountTransactionStore = defineStore({
  id: "count_transaction",
  state: () => ({
    count_transactions: [],
    count_transaction: null,
  }),
  actions: {
    async material() {
      let url = `${baseUrl}/count-transaction/material`;

      const count_transactions = await axiosWrapper.get(url);

      if (count_transactions) {
        this.count_transactions = count_transactions.data;
      }
    },
  },
});
