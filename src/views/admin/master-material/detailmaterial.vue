<template>
	<!-- Breadcrumb Navigation -->
	<nav class="flex mb-6" aria-label="Breadcrumb">
	  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		<li class="inline-flex items-center">
		  <button
			@click="$router.push('/admin/master-material')"
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
	<section class="mt-4">
  <div class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6">
    <div class="grid md:flex md:flex-row md:justify-between gap-4">
      <span class="text-base md:text-lg text-blue-600 font-semibold">Informasi Material</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="flex flex-col text-sm gap-1">
          <p class="text-base font-medium">Nama</p>
          <p class="text-sm md:text-base">{{ material.name }}</p>
        </div>
        <div class="flex flex-col text-sm gap-1">
          <p class="text-base font-medium">Ukuran</p>
          <p class="text-sm md:text-base">{{ material.size }}</p>
        </div>
        <div class="flex flex-col text-sm gap-1">
          <p class="text-base font-medium">Kuantitas</p>
          <p class="text-sm md:text-base">{{ material.quantity }}</p>
        </div>
        <div class="flex flex-col text-sm gap-1">
          <p class="text-base font-medium">Gambar Material</p>
          <img
            :src="'http://localhost:8080/uploads/materials/' + material.picture"
            class="w-full h-[300px] object-cover border border-gray-300 rounded-md"
            alt="Material Picture"
          />
        </div>
      </div>
    </div>
  </div>
</section>


  </template>
  
  <script>
  import { useMaterialStore } from "../../../stores/material.store";
  
  export default {
	data() {
	  return {
		materialStore: useMaterialStore(),
		material: {
		  name: '',
		  size: '',
		  quantity: '',
		  picture: '',
		},
	  };
	},
	mounted() {
	  const id = this.$route.params.id;
	  this.materialStore.show(id).then(() => {
		this.material = this.materialStore.material;
	  });
	},
  };
  </script>
  