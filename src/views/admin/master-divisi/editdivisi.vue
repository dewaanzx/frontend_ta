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
			>Edit Divisi</span>
		  </div>
		</li>
	  </ol>
	</nav>

	<section class="mt-4">
  <form @submit.prevent="confirmUpdate" class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6 mb-8">
    <!-- Division Information -->
    <div>
      <div class="grid md:flex md:flex-row md:justify-between gap-4">
        <span class="text-base md:text-lg text-blue-600">Informasi Divisi</span>
        <div class="grid gap-2 md:w-[80%]">
          <div class="flex flex-col text-sm gap-1">
            <label for="" class="text-base">Nama</label>
            <input
              class="rounded-lg w-full text-base h-[3vmax] px-3 border border-gray-700 bg-white"
              type="text"
              required
              placeholder="Masukkan Nama Divisi"
              v-model="formData.name"
            />
          </div>
        </div>
      </div>
    </div>
  </form>

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
        Simpan
      </button>
    </div>
  </article>
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
    confirmUpdate() {
      if (window.confirm("Apakah anda yakin ingin mengedit data?")) {
        this.update();
      }
    },
    async update() {
      const id = this.$route.params.id;
      let division = await this.divisionStore.update(id, this.formData);

      if (division) {
        this.$router.push("/admin/master-divisi");
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.divisionStore.show(id).then(() => {
      const division = this.divisionStore.divisions;

      this.formData.name = division.name;
    });
  },
};
</script>
