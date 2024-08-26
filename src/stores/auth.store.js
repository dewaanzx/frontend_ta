import { defineStore } from "pinia";
import { getActivePinia } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

import router from "@/router/index.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    authError: null,
  }),
  actions: {
    async login(data) {
      const user = await axiosWrapper.post(`${baseUrl}/login`, data, true);

      if (user.status == 200) {
        this.user = user.data;

        localStorage.setItem("user", JSON.stringify(user.data));

        if (user.data.role == "User") {
          router.push("/users");
        } else if (user.data.role == "SPV Cars") {
          router.push("/spv-mobil");
        } else if (user.data.role == "Admin") {
          router.push("/admin/menu/Semua");
        } else if (user.data.role == "Satpam") {
          router.push("/satpam");
        }
      }
    },
    async register(data) {
      let register = await axiosWrapper.post(`${baseUrl}/register`, data, true);

      if (register) {
        router.push("/login");
      }
    },
    async forgotPassword(data) {
      let response = await axiosWrapper.put(`${baseUrl}/forgot-password`, data, true);
      return response;
    },
    async resetPassword(data, token) {
		console.log(token);
      let response = await axiosWrapper.put(`${baseUrl}/reset-password?token=${token}`, data, true);
      return response;
    },
    async logout() {
      this.user = null;

      localStorage.removeItem("user");
      router.push("/login");

      getActivePinia()._s.forEach((store) => store.$reset());
    },
  },
});
