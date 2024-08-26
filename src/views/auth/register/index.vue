<template>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
	<div  class="overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen"
	style="background-color: #25282B;">
	  <div class="login-container container w-full lg:w-full h-screen lg:h-screen-75 flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group" style="background-color: #25282B;">
		<!-- Left Section -->
		<div class="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
			<div class="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
		  </div>
		  <div class="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
			<img src="../../../assets/logreg.png" alt="product">
			<!-- product image -->
		  </div>
		  <div class="hidden lg:block w-1/3 ml-auto" style="background-color: #25282B;"></div>
		</div>
  
		<!-- Right Section -->
		<div class="w-full md:w-1/2 order-1 md:order-2">
		  <div class="form-wrapper flex items-center lg:h-20% px-10 z-10 pt-10 md:pt-2">
			<div class="w-full">
			  <!-- Logo -->
			  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
				<img src="../../../assets/logobiru.png" alt="Logo" style="width: 100px; height: auto;" />
			  </div>
			  <div>
				<p class="text-md font-bold text-white">Register</p>
			  </div>
			  <form  class="flex flex-col gap-4" action="" @submit.prevent="register">
				<div class="flex flex-col">
				  <label for="name" class="font-medium text-[12px] text-white mb-0">
					<i class="fa fa-user-circle-o"></i> Nama
				  </label>
				  <input v-model="formData.name" type="name" id="name" placeholder="Masukkan nama anda"
					class="p-2 rounded-lg border border-gray-300 w-full" />
				</div>
				
				<div class="flex flex-col">
				  <label for="email" class="font-medium text-[12px] text-white mb-0">
					<i class="fa fa-user-circle-o"></i> Email
				  </label>
				  <input v-model="formData.email" type="email" id="email" placeholder="Masukkan email anda"
					class="p-2 rounded-lg border border-gray-300 w-full" />
				</div>
				
				<div class="flex flex-col">
				  <label for="nomor" class="font-medium text-[12px] text-white mb-0">
					Nomor
				  </label>
				  <input v-model="formData.phone" type="number" id="nomor" placeholder="Masukkan nomor anda"
					class="p-2 rounded-lg border border-gray-300 w-full" />
				</div>
				
				<div class="flex flex-col">
				  <label for="divisi" class="font-medium text-[12px] text-white mb-0">
					Divisi
				  </label>
				  <select v-model="formData.division" id="divisi" class="p-2 rounded-lg border border-gray-300 w-full">
					<option v-for="division in divisionStore.divisions" :value="division.name">{{ division.name }}</option>
				  </select>
				</div>
				
				<div class="flex flex-col">
				  <label for="password" class="font-medium text-[12px] text-white mb-0">
					<i class="fa fa-key"></i> Password
				  </label>
				  <div class="relative">
					<input
						v-model="formData.password"
						:type="showPassword ? 'text' : 'password'"
						id="password"
						placeholder="Masukkan password anda"
						class="p-3 rounded-lg border border-gray-300 w-full"
					/>
					<button type="button" class="absolute top-0 right-0 mr-4 mt-3 text-sm text-gray-600 focus:outline-none" @click="togglePasswordVisibility">
					<i :class="showPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
					</button>
				  </div>
				</div>
				
				<button :type="'submit'"
				  class="transition p-2 w-full bg-orange-500 hover:bg-blue-600 text-white rounded-lg mb-4">
				  Register <i class="fa fa-send"></i>
				</button>
			  </form>
			  <hr style="border: 1px solid #ccc; margin: 10px 0;">
			  <div class="text-center mb-2">
				<span class="text-[12px] text-white">Sudah punya akun?
				  <button @click="$router.push('/login')" class="text-[12px] text-blue-500 hover:text-blue-700 font-bold">
					Login
				  </button>
				</span>
				
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <style>
  .image-container {
	background-image: url(../../../assets/loginreg.png);
	background-position: center;
	background-size: cover;
	height: calc(3.2 * 10em);
  }
  
  /* Add CSS for screens less than 768px */
  @media (max-width: 768px) {
	.image-container {
	  height: auto;
	}
  }
  </style>
  
  <script>
  import { useAuthStore } from "@/stores/auth.store.js";
  import { useDivisionStore } from "../../../stores/division.store";
  
  export default {
	data() {
	  return {
		divisionStore: useDivisionStore(),
		authStore: useAuthStore(),
		formData: {
		  name: null,
		  email: null,
		  password: null,
		  phone: null,
		  divisi: null,
		},
	    showPassword: false,
	};
	},
	methods: {
	  async register() {
		await this.authStore.register(this.formData);
	  },
	  togglePasswordVisibility() {
		this.showPassword = !this.showPassword;
	  },
	},
	beforeRouteEnter(to, from, next) {
	  const DivisionStore = useDivisionStore();
	  DivisionStore.fetch().then(() => {
		next(vm => {
		  vm.DivisionStore = DivisionStore;
		});
	  });
	},
  };
  </script>