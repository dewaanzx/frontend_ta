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
			>Pengajuan Material</span>
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
          class="h-[4vh] w-[4vh] md:h-[7vh] md:w-[7vh] flex items-center justify-center rounded-full bg-white border-[#034E76] border-4"
        >
          <span class="text-lg font-medium md:text-[30px] text-[#034E76]"
            >2</span
          >
        </div>
        <span class="text-[12px] md:text-lg text-[#034E76]">Detail </span>
      </div>
    </div>
    <!-- bagian form request -->
    <form
  action=""
  @submit.prevent="addpinjam()"
  class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6 mb-8"
>
  <!-- Form Pengambilan -->
  <div>
  <!-- Pengambilan Section -->
  <div class="grid md:flex md:flex-row md:justify-between gap-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
    <span class="text-base md:text-lg text-blue-600 font-semibold">Pengambilan</span>
    <div class="grid gap-4 md:w-[80%]">
      <div class="flex flex-col text-sm gap-1">
        <label for="" class="text-base font-medium">Tujuan</label>
        <input
          class="rounded-lg w-full text-base h-[3vmax] px-3 py-2 border border-gray-700 bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
          type="text"
          required
          v-model="mobilStore.tujuan"
          placeholder="Masukkan Tujuan Anda"
        />
      </div>
      <div class="flex flex-col text-sm gap-1">
        <label for="" class="text-base font-medium">Deskripsi</label>
        <textarea
          class="rounded-lg w-full h-[7vmax] p-3 border border-gray-700 bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
          required
          v-model="mobilStore.deskripsi"
          cols="30"
          rows="10"
          placeholder="Deskripsi tujuan anda"
        ></textarea>
      </div>
      <div class="flex flex-col text-sm gap-1">
        <label for="" class="text-base font-medium">Jumlah</label>
        <input
          class="rounded-lg w-full text-base h-[3vmax] px-3 py-2 border border-gray-700 bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
          type="number"
          required
          v-model="mobilStore.quantity"
          placeholder="Masukkan Jumlah"
        />
      </div>
    </div>
  </div>

  <!-- Tanggal & Jam Section -->
  <div class="grid md:flex md:flex-row md:justify-between gap-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md mt-4">
    <span class="text-base md:text-lg text-blue-600 font-semibold">Tanggal & Jam</span>
    <div class="grid grid-rows-1 gap-4 md:w-[80%]">
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col text-sm gap-1">
          <label for="" class="text-base font-medium">Tanggal</label>
          <input
            v-model="mobilStore.tanggal"
            class="rounded-lg w-full h-[3vmax] px-3 py-2 border border-gray-700 bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            type="date"
            required
          />
        </div>
        <div class="flex flex-col text-sm gap-1">
          <label for="" class="text-base font-medium">Jam</label>
          <input
            v-model="mobilStore.waktu"
            class="rounded-lg w-full h-[3vmax] px-3 py-2 border border-gray-700 bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            type="time"
            required
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Submit Buttons -->
  <div class="flex justify-end gap-4 mt-4">
    <button
      @click="$router.push('/users/cekmaterial')"
      class="w-1/4 md:w-1/5 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md py-2 px-4 transition duration-300 ease-in-out"
    >
      Batal
    </button>
    <button
      type="submit"
      class="bg-orange-600 hover:bg-orange-700 text-white rounded-md py-2 px-4 transition duration-300 ease-in-out"
    >
      Selanjutnya
    </button>
  </div>
</div>

</form>

  </div>
</template>
<script>
import { useMobilStore1 } from "../../../stores/stores";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      mobilStore: useMobilStore1(),
	  material_id: "",
      tujuan: "",
      deskripsi: "",
      tanggal: "",
      waktu: "",
      penumpang: "",
      sopir: "",
      keterangan: "",
    };
  },
  methods: {
    addpinjam() {

	  this.mobilStore.material_id =  this.$route.params.id;

      this.$router.push("/users/detail-pengajuan-material");
    },
  },
};
</script>
