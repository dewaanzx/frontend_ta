import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    users: [],
    user: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/user`;
      console.log(url)

      const users = await axiosWrapper.get(url);

      if (users) {
        this.users = users.data;
      }
    },
    async detail() {
      let url = `${baseUrl}/user/detail`;

      const users = await axiosWrapper.get(url);
      console.log(users);
      if (users) {
        this.users = users.data;
      }
    },
    async add(data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.category_id);
      formData.append("phone", data.price);
      formData.append("division", data.division);
      formData.append("picture", data.picture);

      const user = await axiosWrapper.post(`${baseUrl}/user`, formData, true, {
        headers: {
          "Content-Type": "Multipart/form-data",
        },
      });

      this.user = user.data;

      return user;
    },
    async updateProfile(data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("division", data.division);
      formData.append("role", data.role);
      formData.append("picture", data.picture);

      const user = await axiosWrapper.put(
        `${baseUrl}/user/profile/${data.id}`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      this.user = user.data;

      return user;
    },
    async updatePassword(data) {
      return await axiosWrapper.put(
        `${baseUrl}/user/password/${data.id}`,
        data,
        true
      );
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/user/${id}`, {}, true);
    },
  },
});

export const useUser2Store = defineStore({
  id: "user2",
  state: () => ({
    users2: [],
    user2: null,
	countUser: 0,
}),
  actions: {
    async fetch() {
      let url = `${baseUrl}/user`;

      const users2 = await axiosWrapper.get(url);

      if (users2) {
        this.users2 = users2.data;
		this.countUser = users2.count;
      }
    },
    async show(id) {
      let url = `${baseUrl}/user/${id}`;
      console.log(url)

      const users2 = await axiosWrapper.get(url);

      if (users2) {
        this.users2 = users2.data;
      }
    },
  },
});
