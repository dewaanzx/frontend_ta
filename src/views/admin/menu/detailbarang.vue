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
			  >Detail Material</span>
			</div>
		  </li>
		</ol>
	  </nav>
  <!-- main content -->
  <div class="mx-auto text-pinjamin flex flex-col gap-8">
    <!-- bagian form request -->
    <form
  action=""
  class="p-6 md:p-10 rounded-lg border border-gray-700 bg-white shadow-sm flex flex-col gap-6"
  style="background-color: #f5f5f5;"
>
  <!-- form material -->
  <div class="">
    <div class="grid md:flex md:flex-row md:justify-around gap-2">
      <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC] font-semibold">Pegawai</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="flex flex-col text-[12px] gap-1">
          <label for="" class="md:text-[16px] font-semibold">Nama</label>
          <p class="md:text-[14px]" style="line-height: 1.2em">
            {{ materialTransactionStore.material_transactions.user_name }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="grid md:flex md:flex-row md:justify-around gap-2">
      <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC] font-semibold">Material</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="flex flex-col text-[12px] gap-1">
          <label for="" class="md:text-[16px] font-semibold">Tujuan</label>
          <p class="md:text-[14px]" style="line-height: 1.2em">
            {{ materialTransactionStore.material_transactions.destination }}
          </p>
        </div>
        <div class="flex flex-col text-[12px] gap-1">
          <label for="" class="md:text-[16px] font-semibold">Deskripsi</label>
          <p class="md:text-[14px] w-[90%]">
            {{ materialTransactionStore.material_transactions.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- date & time -->
  <div>
    <div class="grid md:flex md:flex-row md:justify-start gap-2">
      <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC] font-semibold">Tanggal & Jam</span>
      <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
        <div class="grid grid-cols-4 gap-2">
          <div class="flex flex-col text-[12px] gap-1">
            <label for="" class="md:text-[16px] font-semibold">Tanggal</label>
            <p class="md:text-[14px]">
              {{ materialTransactionStore.material_transactions.date_start }}
            </p>
          </div>
          <div class="flex flex-col text-[12px] gap-1">
            <label for="" class="md:text-[16px] font-semibold">Jam</label>
            <p class="md:text-[14px]">
              {{ materialTransactionStore.material_transactions.time_start }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="grid md:flex md:flex-row md:justify-around gap-2">
      <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC] font-semibold">Material</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="flex flex-col text-[12px] gap-1">
          <label for="" class="md:text-[16px] font-semibold">Nama</label>
          <p class="md:text-[14px]" style="line-height: 1.2em">
            {{ materialTransactionStore.material_transactions.material_name }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- Status -->
  <div class="">
    <div class="grid md:flex md:flex-row md:justify-around gap-2">
      <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC] font-semibold">Status</span>
      <div
        class="grid gap-2 md:w-[80%]"
        :class="
          materialTransactionStore.material_transactions.status == 'Dikonfirmasi'
            ? 'text-green-600'
            : 'text-red-600'
        "
      >
        <div class="flex flex-col text-[12px] gap-1">
          <p class="font-semibold md:text-[14px]">
            <a
              :class="
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
              "
            >
              {{ materialTransactionStore.material_transactions.status }}</a
            >
          </p>
        </div>
      </div>
    </div>
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