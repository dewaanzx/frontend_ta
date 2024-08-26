import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';

export const useMaterialStore = defineStore({
  id: "material",
  state: () => ({
    materials: [],
    material: null,
	countMaterial: 0,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/material`;

      const response = await axiosWrapper.get(url);

      if (response) {
        this.materials = response.data.map(material => ({
          ...material,
          picture: this.getFullImageUrl(material.picture),
        }));
		this.countMaterial = response.count;
      }
    },
    async show(id) {
      let url = `${baseUrl}/material/${id}`;

      const response = await axiosWrapper.get(url);

      if (response) {
        this.material = {
          ...response.data,
          picture: response.data.picture,
        };
      }
    },
    async add(data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("size", data.size);
	  formData.append("quantity", data.quantity);
      formData.append("picture", data.picture);

      const response = await axiosWrapper.post(
        `${baseUrl}/material/`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      if (response) {
        this.material = {
          ...response.data,
          picture: this.getFullImageUrl(response.data.picture),
        };
      }

      return response;
    },
    async update(id, data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("size", data.size);
	  formData.append("quantity", data.quantity);
      formData.append("picture", data.picture);

      const response = await axiosWrapper.put(
        `${baseUrl}/material/${id}`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      if (response) {
        this.material = {
          ...response.data,
          picture: this.getFullImageUrl(response.data.picture),
        };
        // If the response contains the updated material in a different structure (like response.data.data), use this instead:
        // this.material = {
        //   ...response.data.data,
        //   picture: this.getFullImageUrl(response.data.data.picture),
        // };
      }

      return response;
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/material/${id}`, {}, true);
    },
    getFullImageUrl(picture) {
      return `${baseUrl}/uploads/materials/${picture}`;
    },
  },
});
