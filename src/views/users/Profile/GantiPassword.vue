<template>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
	<section class="w-[80%] mx-auto flex flex-col">
	  <!-- bagian breadcrumb -->
	  <nav class="flex" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		  <li class="inline-flex items-center">
			<button @click="$router.push('/users')" class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500">
			  Home
			</button>
		  </li>
		  <li>
			<div class="flex items-center">
			  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
			  </svg>
			  <button @click="$router.push('/users/profile')" class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500">
				Profile
			  </button>
			</div>
		  </li>
		  <li>
			<div class="flex items-center">
			  <svg class="rtl:rotate-180 w-3 h-3 text-black mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
			  </svg>
			  <span class="ms-1 text-sm md:text-lg text-black md:ms-2 dark:text-black">Ganti Password</span>
			</div>
		  </li>
		</ol>
	  </nav>
  
	  <!-- bagian form edit data -->
	  <div class="flex justify-center items-center min-h-screen">
		<article class="border border-[#D9D9D9] rounded-lg md:rounded-[36px] p-4 md:p-9 w-full max-w-2xl" style="background-color: #25282b;">
		  <form @submit.prevent="update" class="flex flex-col items-center" style="color: #ffffff;">
			<span class="bg-blue-400 w-full text-center mb-4 p-2 rounded-md md:rounded-[16px]">Ganti Password</span>
			<div class="w-full max-w-md">
			  <div class="grid w-full gap-4 md:gap-6">
				<div class="flex flex-col gap-2">
				  <label for="oldPassword">Password Lama</label>
				  <div class="relative">
					<input
					  :type="showOldPassword ? 'text' : 'password'"
					  id="oldPassword"
					  class="border border-[#D9D9D9] rounded-md md:rounded-[16px] md:px-5 md:py-3 p-2 w-full"
					  v-model="formData.oldpassword"
					  style="color: #000000;"
					/>
					<button type="button" class="absolute top-0 right-0 mr-4 mt-3 text-sm text-gray-600 focus:outline-none" @click="toggleOldPasswordVisibility">
					  <i :class="showOldPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
					</button>
				  </div>
				</div>
				<div class="flex flex-col gap-2">
				  <label for="newPassword">Password Baru</label>
				  <div class="relative">
					<input
					  :type="showNewPassword ? 'text' : 'password'"
					  id="newPassword"
					  class="border border-[#D9D9D9] rounded-md md:rounded-[16px] md:px-5 md:py-3 p-2 w-full"
					  v-model="formData.newpassword"
					  style="color: #000000;"
					/>
					<button type="button" class="absolute top-0 right-0 mr-4 mt-3 text-sm text-gray-600 focus:outline-none" @click="toggleNewPasswordVisibility">
					  <i :class="showNewPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
					</button>
				  </div>
				</div>
			  </div>
			</div>
			<div class="mt-6 flex gap-4 justify-center w-full">
			  <button class="bg-red-500 py-2 px-4 text-[11px] md:text-[16px] text-white rounded-lg hover:bg-red-700" @click="$router.push('/users/profile')">Batal</button>
			  <button type="submit" class="bg-[#E26B00] py-2 px-4 text-[11px] md:text-[16px] text-white rounded-lg hover:bg-orange-600">Simpan</button>
			</div>
		  </form>
		</article>
	  </div>
	</section>
  </template>
  
  <script>
  import { useUserStore } from "../../../stores/user.store";
  
  export default {
	data() {
	  return {
		userStore: useUserStore(),
		formData: {
		  id: null,
		  oldpassword: null,
		  newpassword: null,
		},
		showOldPassword: false,
		showNewPassword: false,
	  };
	},
	methods: {
	  async update() {
		let user = await this.userStore.updatePassword(this.formData);
		if (user) {
		  this.$router.push("/users/ganti-password");
		}
	  },
	  toggleOldPasswordVisibility() {
		this.showOldPassword = !this.showOldPassword;
	  },
	  toggleNewPasswordVisibility() {
		this.showNewPassword = !this.showNewPassword;
	  },
	},
	mounted() {
	  this.userStore.detail().then(() => {
		const user = this.userStore.users[0];
		this.formData.id = user.id;
	  });
	},
  };
  </script>
  