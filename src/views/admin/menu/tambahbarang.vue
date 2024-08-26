<template>
  <!-- Breadcrumb -->
  <nav class="flex" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <button
            @click="$router.push('/admin/menu/Semua')"
            class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
          >
            Home
          </button>
        </li>
		<li>
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-black mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span
              class="ms-1 text-sm md:text-lg text-black md:ms-2 dark:text-black"
              >Ambil Barang</span
            >
          </div>
        </li>
      </ol>
    </nav>

  <section class="mt-4">
    <form
      @submit.prevent="confirmCreate"
      class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9"
    >
      <!-- form pinjaman -->
      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Pengambil</span
        >
        <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
          <div class="grid grid-cols-3 md:grid-cols-4 gap-5">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Pengambil</label>
              <select
                required
                v-model="formData.user_id"
                class="rounded-lg text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option v-for="user2 in user2Store.users2" :value="user2.id">{{ user2.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Barang</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Barang</label>
              <input
                class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="text"
                required
                v-model="formData.destination"
                placeholder="Masukkan Barang Anda"
              />
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Deskripsi</label>
              <textarea
                class="rounded-lg w-[100%] h-[7vmax] p-3 border border-[#D9D9D9] text-[14px] md:text-[16px]"
                required
                cols="30"
                rows="10"
                v-model="formData.description"
                placeholder="Deskripsi tujuan anda"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <!-- date & time -->
      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Tanggal & Jam</span
        >
        <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
          <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col text-[14px] md:text-[16px] gap-1">
              <label for="" class="md:text-[16px]">Tanggal</label>
              <input
                class="rounded-lg md:w-[50%] h-[3vmax] px-3 border border-[#D9D9D9] text-[14px] md:text-[16px]"
                type="date"
                v-model="formData.date"
                required
              />
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Jam</label>
              <input
                class="rounded-lg w-[50%] h-[3vmax] text-[14px] md:text-[16px] px-3 border border-[#D9D9D9]"
                type="time"
                v-model="formData.time"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Konfirmasi</span
        >
        <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
          <div class="grid grid-cols-3 md:grid-cols-4 gap-5">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Konfirmasi</label>
              <select
                required
                v-model="formData.status"
                class="rounded-lg text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option value="Diterima">Dikonfirmasi</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>
          </div>
          <div class="text-[12px] gap-1">
            <label for="" class="text-[14px] md:text-[16px]">Deskripsi</label>
            <textarea
              class="rounded-lg w-[100%] h-[7vmax] p-3 text-[14px] md:text-[16px] border border-[#D9D9D9]"
              required
              cols="30"
              rows="10"
              v-model="formData.confirmation_note"
              placeholder="Masukan catatan mengenai detail konfirmasi"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- rectangle -->
      <div class="h-[1px] bg-[#D9D9D9]"></div>
      <!-- button submit -->
      <div
        class="h-[3vmax] text-[12px] md:text-[16px] flex justify-end items-center gap-5"
      >
        <a class="w-[25%] rounded-md md:w-[10%]" @click="goBack">Batal</a>
        <button
          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white md:w-[10%]"
        >
          Tambah
        </button>
      </div>
    </form>
  </section>
</template>
<script>
import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
import { useMaterialStore } from "../../../stores/material.store";
import { useUser2Store } from "../../../stores/user.store";

export default {
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
      materialStore: useMaterialStore(),
      user2Store: useUser2Store(),
      formData: {
        user_id: null,
        date: null,
        time: null,
        destination: null,
        description: null,
        passanger: null,
        passanger_description: null,
        status: null,
        material_id: null,
        confirmation_note: null,
      },
    };
  },
  methods: {
    goBack() {
      console.log(this.formData)
      this.$router.go(-1);
    },
    confirmCreate() {
      if (window.confirm("Apakah anda yakin ingin menambahkan data?")) {
        this.create();
      }
    },
    async create() {
      const material = this.formData.material_id;
      if (material == ""){
        delete this.formData.material_id;
      }

      let material_transaction = await this.materialTransactionStore.add(this.formData);

      if (material_transaction) {
        this.$router.push("/admin/menu/Semua");
      }
    },
  },
  mounted() {
    this.materialStore.fetch();
    this.user2Store.fetch();
  },
};
</script>
../../../stores/material_transaction.store../../../stores/material.store