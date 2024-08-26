import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useNotificationStore = defineStore({
  id: "notification",
  state: () => ({
    notifications: [],
    notification: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/notification`;

      const notifications = await axiosWrapper.get(url);

	  console.log(notifications);

      if (notifications) {
        this.notifications = notifications.data;
      }
    },
    async add(data) {
      const notification = await axiosWrapper.post(
        `${baseUrl}/notification`,
        data,
        true
      );

      this.notification = notification.data;

      return notification;
    },
    async update(id, data) {
      return await axiosWrapper.put(
        `${baseUrl}/notification/${id}`,
        data,
        true
      );
    },
    async delete(id) {
      return await axiosWrapper.delete(
        `${baseUrl}/notification/${id}`,
        {},
        true
      );
    },
  },
});
