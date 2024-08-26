<template>
	<div class="overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen"
	style="background-color: #25282B;">
	  <div class="login-container container w-full lg:w-full h-screen lg:h-screen-75 flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group" style="background-color: #25282B;">
		<div class="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
		  <div class="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
		  </div>
		  <div class="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100 md:block">
			<img src="../../../assets/logreg.png" alt="product">
		  </div>
		  <div class="hidden lg:block w-1/3 ml-auto" style="background-color: #25282B;"></div>
		</div>
		<div class="w-full lg:w-1/2 order-1 lg:order-2">
		  <div class="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
			<div class="w-full space-y-5">
			  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
				<img src="../../../assets/logobiru.png" alt="Logo" style="width: 100px; height: auto;" />
			  </div>
			  <div>
				<p class="text-lg font-bold text-white">Reset Password</p>
			  </div>
			  <form @submit.prevent="forgotPassword">
				<div class="flex flex-col">
				  <label for="email" class="font-medium text-[12px] text-white mb-2">
					<i class="fa fa-user-circle-o"></i> Masukkan emailmu untuk bantu reset
				  </label>
				  <input v-model="formData.email" type="email" id="email" placeholder="Masukkan email anda"
					class="p-3 rounded-lg border border-gray-300 w-full" />
				</div>
				<br>
				<button :type="'submit'"
				  class="transition p-3 w-full bg-orange-500 hover:bg-blue-600 text-white rounded-lg mb-4">
				  Kirim <i class="fa fa-send"></i>
				</button>
			  </form>	  
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import { useAuthStore } from "@/stores/auth.store.js";
  
  export default {
	data() {
	  return {
		authStore: useAuthStore(),
		formData: {
		  email: ""
		}
	  };
	},
	methods: {
	  async forgotPassword() {
		try {
		  await this.authStore.forgotPassword(this.formData);
		  this.$router.push('/verification');
		} catch (error) {
		  console.error("Failed to send reset email", error);
		}
	  }
	}
  };
  </script>
  