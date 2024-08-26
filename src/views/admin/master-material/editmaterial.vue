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
			<span class="text-sm md:text-lg text-black md:ms-2">Edit Material</span>
		  </div>
		</li>
	  </ol>
	</nav>
  
	<!-- Edit Material Form -->
	<section class="mt-4">
	  <form @submit.prevent="confirmUpdate">
		<article class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6 mb-8">
		  <!-- Material Information -->
		  <div>
			<div class="grid md:flex md:flex-row md:justify-between gap-4">
			  <span class="text-base md:text-lg text-blue-600">Informasi Material</span>
			  <div class="grid gap-2 md:w-[80%]">
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Nama</label>
				  <input
					class="rounded-lg w-full text-base h-[3vmax] px-3 border border-gray-700 bg-white"
					type="text"
					required
					placeholder="Masukkan Nama Material"
					v-model="formData.name"
				  />
				</div>
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Ukuran</label>
				  <select
					class="rounded-lg w-full text-base h-[3vmax] px-3 border border-gray-700 bg-white"
					v-model="formData.size"
					required
				  >
					<option value="" disabled selected>Pilih Ukuran Material</option>
					<option v-for="option in sizeOptions" :key="option" :value="option">{{ option }}</option>
				  </select>
				</div>
				<div class="flex flex-col text-sm gap-1">
				  <label for="" class="text-base">Kuantitas</label>
				  <input
					class="rounded-lg w-full text-base h-[3vmax] px-3 border border-gray-700 bg-white"
					type="number"
					required
					placeholder="Masukkan Kuantitas Material"
					v-model="formData.quantity"
				  />
				</div>
				<div>
				  <label for="" class="text-base">Foto Material</label>
				  <label
					for="imageinput"
					class="flex flex-col items-center justify-center border-2 border-dashed rounded-md cursor-pointer hover:bg-gray-100 p-5 bg-gray-50"
				  >
					<div class="grid justify-items-center space-y-2">
					  <img src="../../../assets/camera.svg" alt="Upload Foto" />
					</div>
					<input
					  type="file"
					  class="file:hidden w-[45%] text-[11px] md:w-[6%]"
					  id="imageinput"
					  @change="handlePicture"
					  accept=".jpg, .jpeg, .png"
					/>
				  </label>
				  <!-- Image preview -->
				  <img
					v-if="imagePreview"
					:src="imagePreview"
					alt="Preview"
					class="mt-4 w-full h-[300px] object-cover border border-gray-300 rounded-md"
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
			  Simpan
			</button>
		  </div>
		</article>
	  </form>
	</section>
  </template>
  
  <script>
  import { useMaterialStore } from "../../../stores/material.store";
  
  export default {
	data() {
	  return {
		materialStore: useMaterialStore(),
		formData: {
		  name: null,
		  size: null,
		  quantity: null,
		  picture: null,
		},
		sizeOptions: ["1 M", "1,5 M", "2 M", "3 M", "5 M", "10 M", "15 M", "20 M", "Pigtail G655", "Pigtail G657", "X-KM", "10 KM", "20 KM", "30 KM", "40 KM", "80 KM","100 KM", "2 dB", "3 dB", "5 dB", "7 dB", "10 dB", "UPC3 dB", "M-F", "F-M"],
		imagePreview: null,
	  };
	},
	methods: {
	  goBack() {
		this.$router.go(-1);
	  },
	  confirmUpdate() {
		if (window.confirm("Apakah anda yakin ingin mengedit data?")) {
		  this.update();
		}
	  },
	  handlePicture(e) {
		const picture = e.target.files[0];
		this.formData.picture = picture;
  
		// Preview image
		if (picture) {
		  const reader = new FileReader();
		  reader.onload = (event) => {
			this.imagePreview = event.target.result;
		  };
		  reader.readAsDataURL(picture);
		} else {
		  this.imagePreview = null;
		}
	  },
	  async update() {
		const id = this.$route.params.id;
		let material = await this.materialStore.update(id, this.formData);
  
		if (material) {
		  this.$router.push("/admin/master-material");
		}
	  },
	},
	mounted() {
	  const id = this.$route.params.id;
	  this.materialStore.show(id).then(() => {
		const material = this.materialStore.material;
  
		this.formData.name = material.name;
		this.formData.size = material.size;
		this.formData.quantity = material.quantity;
	  });
	},
  };
  </script>

  