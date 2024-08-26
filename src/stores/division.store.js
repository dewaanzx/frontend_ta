import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useDivisionStore = defineStore({
  id: "division",
  state: () => ({
    divisions: [],
    division: null,
	countDivision: 0,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/division`;

      const divisions = await axiosWrapper.get(url);

      if (divisions) {
        this.divisions = divisions.data;
		
		this.countDivision = divisions.count;
      }
    },
    async show(id) {
      let url = `${baseUrl}/division/${id}`;

      const divisions = await axiosWrapper.get(url);

      if (divisions) {
        this.divisions = divisions.data;
      }
    },
    async nonSelected(name) {
      let url = `${baseUrl}/division/non-selected/${name}`;

      const divisions = await axiosWrapper.get(url);

      if (divisions) {
        this.divisions = divisions.data;
      }
    },
    async add(data) {
      const division = await axiosWrapper.post(
        `${baseUrl}/division`,
        data,
        true
      );

      this.division = division.data;

      return division;
    },
    async update(id, data) {
      return await axiosWrapper.put(`${baseUrl}/division/${id}`, data, true);
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/division/${id}`, {}, true);
    },
  },
});
