import { defineStore } from "pinia";

export const useRuangStore1 = defineStore("ruang.satu", {
  state: () => ({
    ruangan: "",
    acara: "",
    deskripsi: "",
    tanggal: "",
    jammulai: "",
    jamselesai: "",
    peserta: "",
    konsumsi: "",
    keterangan: "",
  }),
  actions: {
    addpinjam(data) {
      // this.tujuan = tujuan.data;
      // console.log(data);
      this.ruangan = data.ruangan;
      this.acara = data.acara;
      this.deskripsi = data.deskripsi;
      this.jammulai = data.jammulai;
      this.jamselesai = data.jamselesai;
      this.peserta = data.peserta;
      this.konsumsi = data.konsumsi;
      this.keterangan = data.keterangan;
    },

    addtanggal(data) {
      // this.tujuan = tujuan.data;
      // console.log(data);

      this.tanggal = data.tanggal;
    },

    pindahKeFormulir2() {
      this.$router.push("/users/riwayat-pinjam-ruangan/detail");
    },
  },
});
