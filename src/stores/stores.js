import { defineStore } from "pinia";
import axios from "axios";

export const useMobilStore1 = defineStore("mobil.satu", {
  state: () => ({
    material_id: "",
    tujuan: "",
    deskripsi: "",
    tanggal: "",
    waktu: "",
    penumpang: "",
    keterangan: "",
    material_name: "",
    quantity: "",
  }),
  actions: {
    async addpinjam(data) {
      try {
        // Assuming baseUrl is defined somewhere accessible
        const response = await axios.get(`${baseUrl}/material/${data.material_id}`);
        
        // Assuming response.data contains the material details including material_name
        const material = response.data;

        // Update store state
        this.material_id = material.id;
        this.tujuan = data.tujuan;
        this.deskripsi = data.deskripsi;
        this.tanggal = data.tanggal;
        this.waktu = data.waktu;
        this.keterangan = data.keterangan;
        this.material_name = material.name;
        this.quantity = data.quantity;
      } catch (error) {
        console.error("Error fetching material:", error);
        // Handle error as needed
      }
    },

    pindahKeFormulir2() {
      this.$router.push("/users/detail-pengajuan-mobil");
    },
  },
});
