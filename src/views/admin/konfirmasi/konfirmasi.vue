<template>
	<div>
	  <!-- Breadcrumb Navigation -->
	  <nav class="flex mb-6" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		  <li class="inline-flex items-center">
			<button
			  @click="$router.push('/admin/konfirmasi')"
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
			  >Konfirmasi</span>
			</div>
		  </li>
		</ol>
	  </nav>
  
	  <!-- Confirmation Form -->
	  <form @submit.prevent="confirmUpdate">
		<article class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6 mb-8">
		  <!-- Pegawai Info -->
		  <div>
			<div class="grid md:flex md:flex-row md:justify-between gap-4">
			  <span class="text-base md:text-lg text-blue-600">Pegawai</span>
			  <div class="grid gap-2 md:w-[80%]">
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Nama</label>
				  <p class="text-base">{{ formData.user_name }}</p>
				</div>
			  </div>
			</div>
		  </div>
  
		  <!-- Material Data -->
		  <div>
			<div class="grid md:flex md:flex-row md:justify-between gap-4">
			  <span class="text-base md:text-lg text-blue-600">Data Material</span>
			  <div class="grid gap-2 md:w-[80%]">
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Nama Material</label>
				  <p class="text-base">{{ formData.material_name }}</p>
				</div>
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Tujuan</label>
				  <p class="text-base">{{ formData.destination }}</p>
				</div>
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Deskripsi</label>
				  <p class="text-base">{{ formData.description }}</p>
				</div>
			  </div>
			</div>
		  </div>
  
		  <!-- Date & Time -->
		  <div>
			<div class="grid md:flex md:flex-row md:justify-between gap-4">
			  <span class="text-base md:text-lg text-blue-600">Tanggal & Jam</span>
			  <div class="grid grid-cols-2 gap-4 md:w-[80%]">
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Tanggal</label>
				  <p class="text-base">{{ formData.date }}</p>
				</div>
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Jam</label>
				  <p class="text-base">{{ formData.time }}</p>
				</div>
			  </div>
			</div>
		  </div>
  
		  <!-- Status -->
		  <div>
			<div class="grid md:flex md:flex-row md:justify-between gap-4">
			  <span class="text-base md:text-lg text-blue-600">Status</span>
			  <div class="grid gap-2 md:w-[80%]">
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Status</label>
				  <p class="font-semibold text-base">{{ formData.status }}</p>
				</div>
			  </div>
			</div>
		  </div>
		</article>
  
		<!-- Submit Buttons -->
		<article class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6">
		  <div class="flex justify-end gap-4">
			<button
			  @click="goBack"
			  class="w-1/4 md:w-1/5 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md py-2 px-4"
			>
			  Batal
			</button>
			<button
			  type="submit"
			  class="bg-orange-600 hover:bg-orange-700 text-white rounded-md py-2 px-4"
			>
			  Konfirmasi
			</button>
		  </div>
		</article>
	  </form>
	</div>
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
		  user_name: null,
		  material_name: null,
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
	  confirmUpdate() {
		if (window.confirm("Apakah anda yakin ingin menambahkan data?")) {
		  this.update();
		}
	  },
	  async update() {
		const material = this.formData.material_id;
		if (material == ""){
		  delete this.formData.material_id;
		}
  
		const id = this.$route.params.id;
		let material_transaction = await this.materialTransactionStore.take(id, this.formData);
  
		if (material_transaction) {
		  this.$router.push("/admin/konfirmasi");
		}
	  },
	},
	mounted() {
	  const id = this.$route.params.id;
	  this.materialTransactionStore.show(id).then(() => {
		const material_transaction = this.materialTransactionStore.material_transactions;
  
		this.formData.user_name = material_transaction.user_name;
		this.formData.material_name = material_transaction.material_name;
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