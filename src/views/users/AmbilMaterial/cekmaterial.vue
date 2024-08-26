<template>
	
	<section class="md:w-[75%] mx-auto flex flex-col">
		<!-- Breadcrumb Navigation -->
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
			>Cek Material</span>
		  </div>
		</li>
	  </ol>
	</nav>
	  <article class="flex flex-row flex-wrap justify-between gap-3 md:gap-6">
		<!-- materiald cek material -->
		<div
  v-for="material in materialStore.materials"
  :key="material.id"
  class="flex flex-col gap-5 w-[45%] md:w-[20%] p-3 border border-gray-700 rounded-xl justify-between bg-[#f5f5f5]"
>
  <div class="flex flex-col gap-[6px]">
    <img
      :src="getImageUrl(material.picture)"
      alt=""
      class="w-[13vmax] h-[8vmax] rounded-lg mx-auto"
      style="object-fit: cover"
    />
    <span class="text-[14px] text-gray-800 leading-4">
      {{ material.name }}
    </span>
  </div>
  <!-- rectangle -->
  <div class="h-[1px] bg-[#D9D9D9]"></div>
  <!-- Informasi tujuan apabila dipakai -->
  <div class="flex flex-col leading-4 gap-1">
    <span class="mt-[-4px] text-[14px] text-gray-800">Ukuran : {{ material.size }}</span>
    <span class="mt-[-4px] text-[14px] text-gray-800 mt-1">Tersedia : {{ material.quantity }}</span>
  </div>
  <!-- button -->
  <button
    @click="$router.push('/users/pengajuanmaterial/' + material.id)"
    class="text-[14px] bg-[#E26B00] text-white rounded-lg py-[6px]"
    v-if="material.quantity > 0"
  >
    Ambil
  </button>
  <button
    @click="$router.push('/users/pengajuanmaterial/' + material.id)"
    class="text-[14px] bg-[#505050] text-white rounded-lg py-[6px]"
    v-if="material.quantity == 0"
    disabled
  >
    Tidak Tersedia
  </button>
</div>

	  </article>
	</section>
  </template>
  
  <script>
  import { useMaterialStore } from "../../../stores/material.store";
  
  export default {
	data() {
	  return {
		materialStore: useMaterialStore(),
	  };
	},
	methods: {
	  getImageUrl(picture) {
		return `${picture}`;
	  },
	},
	beforeRouteEnter(to, from, next) {
	  const MaterialStore = useMaterialStore();
	  MaterialStore.fetch().then(() => {
		next(vm => {
		  vm.MaterialStore = MaterialStore;
		});
	  });
	},
  };
  </script>
  ../../../stores/material.store