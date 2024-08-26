<template>
  <!-- main content -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-2">
    <!-- bagian breadcrumb -->
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
			<button
			@click="$router.push('/users/cekmaterial')"
			class="inline-flex items-center text-sm md:text-lg font-medium text-gray-700 hover:text-blue-600"
		  >
			Cek Material
		  </button>
		  </div>
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
			>Detail Pengajuan Material</span>
		  </div>
		</li>
	  </ol>
	</nav>

    <!-- bagian step section -->
    <div
      class="py-[15px] flex flex-row space-x-5 justify-center md:gap-6 cursor-default"
      style="line-height: 1.2em"
    >
      <!-- step 1 -->
      <div class="flex flex-col items-center gap-[6px] w-[7vh]">
        <div
          class="h-[4vh] w-[4vh] md:h-[7vh] md:w-[7vh] flex items-center justify-center rounded-full bg-[#034E76] hover:bg-[#034476]"
        >
          <span class="text-lg font-medium md:text-[30px] text-white">1</span>
        </div>
        <span class="text-[12px] md:text-lg text-[#034E76]">Pengajuan</span>
      </div>
      <!-- rectangle -->
      <div class="bg-[#D9D9D9] h-1 w-[10%] my-6"></div>
      <!-- step 2 -->
      <div class="flex flex-col items-center gap-[6px] w-[7vh]">
        <div
          class="h-[4vh] w-[4vh] md:h-[7vh] md:w-[7vh] flex items-center justify-center rounded-full bg-[#034E76] hover:bg-[#034476]"
        >
          <span class="text-lg font-medium md:text-[30px] text-white">2</span>
        </div>
        <span class="text-[12px] md:text-lg text-[#034E76]">Detail </span>
      </div>
    </div>
    <!-- bagian form request -->
    <form
  action=""
  @submit.prevent="create"
  class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6 mb-8"
>
  <!-- Form Pinjaman -->
  <div>
    <div class="grid md:flex md:flex-row md:justify-between gap-4">
      <span class="text-base md:text-lg text-blue-600">Pengambilan</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="text-sm">
          <label class="text-base">Tujuan:</label>
          <p>{{ mobilStore.tujuan }}</p>
        </div>
        <div class="text-sm">
          <label class="text-base">Deskripsi:</label>
          <p>{{ mobilStore.deskripsi }}</p>
        </div>
        <div class="text-sm">
          <label class="text-base">Jumlah:</label>
          <p>{{ mobilStore.quantity }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Date & Time -->
  <div class="grid md:flex md:flex-row md:justify-between gap-4">
    <span class="text-base md:text-lg text-blue-600">Tanggal & Jam</span>
    <div class="grid grid-rows-1 gap-2 md:w-[80%]">
      <div class="grid grid-cols-2 gap-2">
        <div class="text-sm">
          <label class="text-base">Tanggal:</label>
          <p>{{ mobilStore.tanggal }}</p>
        </div>
        <div class="text-sm">
          <label class="text-base">Jam:</label>
          <p>{{ mobilStore.waktu }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Submit Buttons -->
  <div class="flex justify-end gap-4">
    <button
      @click="$router.push('/users/cekmaterial')"
      class="w-1/4 md:w-1/5 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md py-2 px-4"
    >
      Batal
    </button>
    <button
      @submit.prevent="create"
      class="bg-orange-600 hover:bg-orange-700 text-white rounded-md py-2 px-4"
    >
      Selanjutnya
    </button>
  </div>
</form>

  </div>

</template>
<script>
import { useMobilStore1 } from "@/stores/stores";
import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
import { useMaterialStore } from "../../../stores/material.store";

export default {
  data() {
    return {
      mobilStore: useMobilStore1(),
      materialStore: useMaterialStore(),
      materialTransactionStore: useMaterialTransactionStore(),
      formData: {
        material_id: null, // Make sure this is initialized properly
        date: null,
        time: null,
        destination: null,
        description: null,
        passanger: null,
        passanger_description: null,
        driver: null,
        quantity: null,
      },
    };
  },
  methods: {
    async create() {
      // Assigning values from mobilStore to formData
      this.formData.material_id = parseInt(this.mobilStore.material_id); // Convert to integer
      this.formData.destination = this.mobilStore.tujuan;
      this.formData.description = this.mobilStore.deskripsi;
      this.formData.date = this.mobilStore.tanggal;
      this.formData.time = this.mobilStore.waktu;
      this.formData.passanger = this.mobilStore.penumpang;
      this.formData.driver = this.mobilStore.sopir;
      this.formData.passanger_description = this.mobilStore.keterangan;
      this.formData.quantity = this.mobilStore.quantity;

      try {
        let material_transaction = await this.materialTransactionStore.add(this.formData);

        if (material_transaction) {
          this.$router.push("/users");
        }
      } catch (error) {
        console.error("Error creating material transaction:", error);
        // Handle error appropriately (e.g., show user a message)
      }
    },
  },
};
</script>

../../../stores/material_transaction.store