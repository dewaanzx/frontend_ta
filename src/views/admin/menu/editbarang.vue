<template>
	<!-- Breadcrumb Navigation -->
	<nav class="flex mb-6" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		  <li class="inline-flex items-center">
			<button
			  @click="$router.push('/admin/menu/Semua')"
			  class="inline-flex items-center text-sm md:text-lg font-medium text-gray-700 hover:text-blue-600"
			>
			  Home
			</button>
		  </li>
		  <li>
			<div class="flex items-center">
			  <svg
				class="rtl:rotate-180 w-3 h-3 text-gray-500 mx-1"
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
				class="text-sm md:text-lg text-black md:ms-2"
			  >Edit Material</span>
			</div>
		  </li>
		</ol>
	  </nav>
  
	<!-- Main Content -->
	<section class="mt-6">
	  <form
		@submit.prevent="confirmUpdate"
		class="p-6 md:p-10 rounded-lg border border-gray-700 bg-white shadow-sm flex flex-col gap-6"
		style="background-color: #f5f5f5;"
	  >
		<!-- Peminjam Section -->
		<div class="grid md:flex md:flex-row md:justify-between gap-4">
		  <span class="text-sm md:text-base font-medium text-blue-600">Peminjam</span>
		  <div class="grid gap-2 md:w-3/4">
			<div class="flex flex-col text-sm gap-1">
			  <label for="" class="text-base font-semibold">Nama</label>
			  <span class="text-sm md:text-base">{{ materialTransactionStore.material_transactions.user_name }}</span>
			</div>
		  </div>
		</div>
  
		<!-- Pengambilan Section -->
		<div>
		  <div class="grid md:flex md:flex-row md:justify-between gap-4">
			<span class="text-sm md:text-base font-medium text-blue-600">Pengambilan</span>
			<div class="grid gap-2 md:w-3/4">
			  <div class="flex flex-col text-sm gap-1">
				<label for="" class="text-base font-semibold">Tujuan</label>
				<input
				  class="rounded-md w-full text-base h-12 px-3 border border-gray-300"
				  type="text"
				  required
				  placeholder="Masukkan Tujuan Anda"
				  v-model="formData.destination"
				/>
			  </div>
			  <div class="flex flex-col text-sm gap-1">
				<label for="" class="text-base font-semibold">Deskripsi</label>
				<textarea
				  class="rounded-md w-full h-32 p-3 border border-gray-300 text-base"
				  required
				  cols="30"
				  rows="10"
				  placeholder="Deskripsi tujuan anda"
				  v-model="formData.description"
				></textarea>
			  </div>
			</div>
		  </div>
		</div>
  
		<!-- Date & Time Section -->
		<div class="grid md:flex md:flex-row md:justify-between gap-4">
		  <span class="text-sm md:text-base font-medium text-blue-600">Tanggal & Jam</span>
		  <div class="grid grid-rows-1 gap-4 w-full md:w-3/4">
			<div class="grid grid-cols-2 gap-4">
			  <div class="flex flex-col text-base gap-1">
				<label for="" class="font-semibold">Tanggal</label>
				<input
				  class="rounded-md w-full h-12 px-3 border border-gray-300"
				  type="date"
				  required
				  v-model="formData.date"
				/>
			  </div>
			  <div class="flex flex-col text-base gap-1">
				<label for="" class="font-semibold">Jam</label>
				<input
				  class="rounded-md w-full h-12 px-3 border border-gray-300"
				  type="time"
				  required
				  v-model="formData.time"
				/>
			  </div>
			</div>
		  </div>
		</div>
  
		<!-- Material Section -->
		<div class="grid md:flex md:flex-row md:justify-between gap-4">
		  <span class="text-sm md:text-base font-medium text-blue-600">Material</span>
		  <div class="grid grid-rows-1 gap-4 w-full md:w-3/4">
			<div class="grid grid-cols-3 md:grid-cols-4 gap-5">
			  <div class="flex flex-col text-sm gap-1">
				<label for="" class="text-base font-semibold">Material</label>
				<select
				  v-model="formData.material_id"
				  class="rounded-md w-full text-base h-12 px-3 border border-gray-300"
				>
				  <option v-for="material in materialStore.materials" :value="material.id">{{ material.name }}</option>
				</select>
			  </div>
			</div>
		  </div>
		</div>
  
		<!-- Status Section -->
		<div class="grid md:flex md:flex-row md:justify-between gap-4">
		  <span class="text-sm md:text-base font-medium text-blue-600">Status</span>
		  <div class="grid grid-rows-1 gap-4 w-full md:w-3/4">
			<div class="grid grid-cols-3 md:grid-cols-4 gap-5">
			  <div class="flex flex-col text-sm gap-1">
				<label for="" class="text-base font-semibold">Status</label>
				<select
				  required
				  v-model="formData.status"
				  class="rounded-md text-base h-12 px-3 border border-gray-300"
				>
				  <option value="Diambil">Diambil</option>
				  <option value="Dikonfirmasi">Dikonfirmasi</option>
				</select>
			  </div>
			</div>
		  </div>
		</div>
  
		<!-- Divider -->
		<div class="h-px bg-gray-300"></div>
  
		<!-- Button Section -->
		<div
		  class="flex justify-end items-center gap-4 mt-4"
		>
		  <a class="w-1/4 md:w-1/6 rounded-md bg-gray-200 text-center py-2 cursor-pointer" @click="goBack">Batal</a>
		  <button
			class="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md md:w-1/6"
		  >
			Simpan
		  </button>
		</div>
	  </form>
	</section>
  </template>
<script>
import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
import { useRoute } from "vue-router";
import { useMaterialStore } from "../../../stores/material.store";

export default {
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
      materialStore: useMaterialStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
        description: null,
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
    confirmUpdate() {
      if (window.confirm("Apakah anda yakin ingin mengedit data?")) {
        this.update();
      }
    },
    async update() {
      const material = this.formData.material_id;
      if (material == ""){
        delete this.formData.material_id;
      }

      const id = this.$route.params.id;
      let material_transaction = await this.materialTransactionStore.update(id, this.formData);

      if (material_transaction) {
        this.$router.push("/admin/menu/Semua");
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.materialTransactionStore.show(id).then(() => {
      const material_transaction = this.materialTransactionStore.material_transactions;

      this.formData.date = material_transaction.date_start;
      this.formData.time = material_transaction.time_start;
      this.formData.destination = material_transaction.destination;
      this.formData.description = material_transaction.description;
      this.formData.passanger = material_transaction.passanger;
      this.formData.passanger_description = material_transaction.passanger_description;
      this.formData.status = material_transaction.status;
      this.formData.material_id = material_transaction.material_id;
      this.formData.confirmation_note = material_transaction.confirmation_note;
    });

    this.materialStore.fetch();
  },
};
</script>
../../../stores/material_transaction.store../../../stores/material.store