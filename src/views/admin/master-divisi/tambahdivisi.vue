<template>
  <!-- Breadcrumb Navigation -->
	<nav class="flex mb-6" aria-label="Breadcrumb">
	  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		<li class="inline-flex items-center">
		  <button
			@click="$router.push('/admin/master-divisi')"
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
			>Tambah Divisi</span>
		  </div>
		</li>
	  </ol>
	</nav>

	<section class="mt-4">
  <form @submit.prevent="confirmCreate">
    <article class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6 mb-8">
      <!-- Informasi Divisi -->
      <div>
        <div class="grid md:flex md:flex-row md:justify-between gap-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
  <span class="text-base md:text-lg text-blue-600 font-semibold">Informasi Divisi</span>
  <div class="grid gap-4 md:w-[80%]">
    <div class="flex flex-col text-sm gap-1">
      <label for="" class="text-base font-medium">Nama</label>
      <input
        class="rounded-lg w-full text-base h-[3vmax] px-3 py-2 border border-gray-700 bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
        type="text"
        required
        placeholder="Masukkan Nama Divisi"
        v-model="formData.name"
      />
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
          Tambah
        </button>
      </div>
    </article>
  </form>
</section>

</template>
<script>
import { useDivisionStore } from "../../../stores/division.store";

export default {
  data() {
    return {
      divisionStore: useDivisionStore(),
      formData: {
        name: null,
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
      let division = await this.divisionStore.add(this.formData);

      if (division) {
        this.$router.push("/admin/master-divisi");
      }
    },
  },
};
</script>
