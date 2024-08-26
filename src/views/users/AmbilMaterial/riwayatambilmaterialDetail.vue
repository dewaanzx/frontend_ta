<template>
	<!-- main content -->
	<div class="mx-auto text-pinjamin flex flex-col gap-8">
		<nav class="flex mb-6" aria-label="Breadcrumb">
	  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		<li class="inline-flex items-center">
		  <button
			@click="$router.push('/users')"
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
			>Detail Riwayat Ambil Material</span>
		  </div>
		</li>
	  </ol>
	</nav>
	  <!-- bagian form request -->
	  <form
  action=""
  class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6 mb-8"
>
  <!-- Form Pinjaman -->
  <div>
    <div class="grid md:flex md:flex-row md:justify-between gap-4">
      <span class="text-lg md:text-xl text-blue-600">Pegawai</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="text-sm">
          <label class="text-base font-bold">Nama:</label>
          <p class="text-sm">{{ materialTransactionStore.material_transactions.user_name }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Material -->
  <div>
    <div class="grid md:flex md:flex-row md:justify-between gap-4">
      <span class="text-lg md:text-xl text-blue-600">Data</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="text-sm">
          <label class="text-base font-bold">Tujuan:</label>
          <p class="text-sm">{{ materialTransactionStore.material_transactions.destination }}</p>
        </div>
        <div class="text-sm">
          <label class="text-base font-bold">Deskripsi:</label>
          <p class="text-sm">{{ materialTransactionStore.material_transactions.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Date & Time -->
  <div class="grid md:flex md:flex-row md:justify-between gap-4">
    <span class="text-lg md:text-xl text-blue-600">Tanggal & Jam</span>
    <div class="grid grid-rows-1 gap-2 md:w-[80%]">
      <div class="grid grid-cols-2 gap-2">
        <div class="text-sm">
          <label class="text-base font-bold">Tanggal:</label>
          <p class="text-sm">{{ materialTransactionStore.material_transactions.date_start }}</p>
        </div>
        <div class="text-sm">
          <label class="text-base font-bold">Jam:</label>
          <p class="text-sm">{{ materialTransactionStore.material_transactions.time_start }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Material -->
  <div>
    <div class="grid md:flex md:flex-row md:justify-between gap-4">
      <span class="text-lg md:text-xl text-blue-600">Material</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="text-sm">
          <label class="text-base font-bold">Nama:</label>
          <p class="text-sm">{{ materialTransactionStore.material_transactions.material_name }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Status -->
  <div>
    <div class="grid md:flex md:flex-row md:justify-between gap-4">
      <span class="text-lg md:text-xl text-blue-600">Status</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="text-sm font-semibold">
          <p :class="
            materialTransactionStore.material_transactions.status == 'Diterima'
              ? 'text-green-600'
              : materialTransactionStore.material_transactions.status == 'Ditolak'
              ? 'text-red-600'
              : materialTransactionStore.material_transactions.status == 'Dicek'
              ? 'text-gray-600'
              : materialTransactionStore.material_transactions.status == 'Selesai'
              ? 'text-gray-600'
              : materialTransactionStore.material_transactions.status == 'Digunakan'
              ? 'text-orange-400'
              : ''
          ">
            {{ materialTransactionStore.material_transactions.status }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-end gap-4">
    <button
      @click="$router.push('/users')"
      class="w-1/4 md:w-1/5 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md py-2 px-4"
    >
      Kembali
    </button>
  </div>
</form>


	</div>
  </template>
  <script>
  import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
  import { useMaterialStore } from "../../../stores/material.store";
  
  export default {
	data() {
	  return {
		materialTransactionStore: useMaterialTransactionStore(),
		materialStore: useMaterialStore(),
	  };
	},
	async mounted() {
	  const id = this.$route.params.id;
  
	  await this.materialTransactionStore.show(id);
	  const materialId = this.materialTransactionStore.material_transactions.material_id;
	  }
  };
  </script>
  ../../../stores/material_transaction.store../../../stores/material.store