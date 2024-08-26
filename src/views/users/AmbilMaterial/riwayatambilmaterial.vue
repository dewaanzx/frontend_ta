<template>
	<div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-6 md:gap-1">
	  <!-- Breadcrumb Navigation -->
	  <nav class="flex mb-6" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		  <li class="inline-flex items-center">
			<button @click="$router.push('/users')" class="inline-flex items-center text-sm md:text-lg font-medium text-gray-700 hover:text-blue-600">
			  Home
			</button>
		  </li>
		  <li>
			<div class="flex items-center">
			  <svg class="rtl:rotate-180 w-3 h-3 text-gray-500 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
			  </svg>
			  <span class="text-sm md:text-lg text-black md:ms-2">Riwayat Ambil Material</span>
			</div>
		  </li>
		</ol>
	  </nav>
  
	  <!-- Search Bar and Status Buttons -->
	  <div class="flex flex-col gap-4">
		<!-- Search Bar -->
		<article class="mt-4">
		  <div class="md:flex md:flex-row-reverse md:justify-end md:gap-1">
			<div class="my-auto">
			  <input v-model="searchQuery" type="text" class="border border-black px-3 inline-block rounded-[12px] text-[12px] md:text-[16px] h-[40px]" placeholder="Cari Transaksi" />
			</div>
		  </div>
		</article>
  
		<!-- Status Buttons -->
		<div class="flex flex-wrap gap-3 justify-center md:justify-start">
			<RouterLink :to="'/users/riwayat-ambil-material/Semua'">
  <button
    class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border-[1.5px] border-black rounded-lg md:rounded-[16px] font-bold"
    @click="fetchByStatus('Semua')"
    :class="
      $route.params.status == 'Semua'
        ? 'text-white bg-blue-500'
        : 'bg-gray-200 text-black'
    "
    style="padding: 4px 8px; border-radius: 4px;"
  >
    Semua
  </button>
</RouterLink>

<RouterLink :to="'/users/riwayat-ambil-material/Diambil'">
  <button
    class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border-[1.5px] border-black rounded-lg md:rounded-[16px] font-bold"
    @click="fetchByStatus('Diambil')"
    :class="
      $route.params.status == 'Diambil'
        ? 'text-white bg-yellow-500'
        : 'bg-gray-200 text-black'
    "
    style="padding: 4px 8px; border-radius: 4px;"
  >
    Diambil
  </button>
</RouterLink>

<RouterLink :to="'/users/riwayat-ambil-material/Dikonfirmasi'">
  <button
    class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border-[1.5px] border-black rounded-lg md:rounded-[16px] font-bold"
    @click="fetchByStatus('Dikonfirmasi')"
    :class="
      $route.params.status == 'Dikonfirmasi'
        ? 'text-white bg-green-500'
        : 'bg-gray-200 text-black'
    "
    style="padding: 4px 8px; border-radius: 4px;"
  >
    Dikonfirmasi
  </button>
</RouterLink>

		</div>
	  </div>
  
	  <!-- Material List -->
	  <div class="grid gap-4 md:gap-6 text-[14px] md:text-[18px]">
		<RouterLink
		  class="w-full p-4 md:px-9 md:py-5 border border-[#e5e5e5] rounded-lg md:rounded-[24px] flex justify-between shadow-sm bg-[#f5f5f5] border border-gray-700"
		  v-for="material_transaction in filteredMaterialTransactions"
		  :key="material_transaction.id"
		  :to="'/users/riwayat-ambil-material-detail/' + material_transaction.id"
		>
		  <div class="w-[75%] flex flex-col gap-1">
			<p style="line-height: 1.2em">{{ material_transaction.destination }}</p>
			<span class="flex items-center gap-3 text-[12px] md:text-[14px] text-[#aaa]">
			  <img src="../../../assets/calender.png" class="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" alt="" />{{ material_transaction.date_start }}
			</span>
			<span class="flex items-center gap-3 text-[12px] md:text-[14px] text-[#aaa]">
			  <img src="../../../assets/time-line.png" class="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" alt="" />{{ material_transaction.time_start }}
			</span>
		  </div>
		  <div class="flex items-center">
			<button v-if="material_transaction.status == 'Diterima'" class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-full">Diterima</button>
			<button v-if="material_transaction.status == 'Dicek'" class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#E5E5E5] text-[11px] md:text-[14px] text-[#404040] rounded-full">Dicek</button>
			<button v-if="material_transaction.status == 'Ditolak'" class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#FFD1D1] text-[11px] md:text-[14px] text-[#d80000] rounded-full">Ditolak</button>
			<button v-if="material_transaction.status == 'Digunakan'" class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#FDEDCA] text-[10px] md:text-[14px] text-orange-500 rounded-full">Digunakan</button>
			<button v-if="material_transaction.status == 'Selesai'" class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#C1E9FF] text-[11px] md:text-[14px] text-[#003754] rounded-full">Selesai</button>
		  </div>
		</RouterLink>
	  </div>
	</div>
  </template>
  
  <script>
  import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
  import { useRoute } from "vue-router";
  
  export default {
	data() {
	  return {
		materialTransactionStore: useMaterialTransactionStore(),
		searchQuery: '',
	  };
	},
	computed: {
	  filteredMaterialTransactions() {
		if (!this.searchQuery) {
		  return this.materialTransactionStore.material_transactions;
		}
		return this.materialTransactionStore.material_transactions.filter((transaction) => {
		  return transaction.destination.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
				 transaction.date_start.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
				 transaction.time_start.toLowerCase().includes(this.searchQuery.toLowerCase());
		});
	  },
	},
	methods: {
	  fetchByStatus(status) {
		this.materialTransactionStore.fetchByStatus(status);
	  },
	},
	mounted() {
	  const status = this.$route.params.status;
	  this.materialTransactionStore.fetchByStatus(status);
	},
  };
  </script>
  