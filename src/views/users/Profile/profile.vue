<template>
	<div class="w-[80%] mx-auto flex flex-col gap-8">
	  <!-- Breadcrumb section -->
	  <nav class="flex" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		  <li class="inline-flex items-center">
			<button @click="$router.push('/users')" class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500">
			  Home
			</button>
		  </li>
		  <li>
			<div class="flex items-center">
			  <svg class="rtl:rotate-180 w-3 h-3 text-black mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
			  </svg>
			  <span class="ms-1 text-sm md:text-lg text-black md:ms-2 dark:text-black">Profile</span>
			</div>
		  </li>
		</ol>
	  </nav>
	  
	  <!-- Profile & setting profile section -->
	  <div class="flex flex-col md:flex-row md:gap-8 gap-8 justify-center">
		<!-- Profile section -->
		<div class="flex flex-col md:w-[40%] items-center md:gap-5 gap-3 border border-[#D9D9D9] rounded-xl p-5 shadow-sm" v-for="user in userStore.users" style="background-color: #f9f9f9;">
		  <!-- Profile picture -->
		  <div class="bg-transparent rounded-full md:shadow-lg w-[10vmax] h-[10vmax] md:w-[7vmax] md:h-[7vmax] flex justify-center items-center">
			<img class="rounded-full w-[8vmax] h-[8vmax] md:w-[7vmax] md:h-[7vmax]" :src="'http://localhost:8080/uploads/users/' + user.picture" style="object-fit: cover" alt="Profile Picture" />
		  </div>
		  
		  <!-- Profile details -->
	  <div class="flex flex-col gap-1 items-center" v-for="user in userStore.users">
			<p class="font-medium text-[16px] lg:text-[20px]" style="line-height: 1.2em; color: #333;">{{ user.name }}</p>
			<p class="text-[12px] lg:text-[13px] text-gray-500">{{ user.division }}</p>
			<p class="text-[12px] lg:text-[13px] text-gray-500">{{ user.email }}</p>
			<p class="text-[12px] lg:text-[13px] text-gray-500">{{ user.phone }}</p>
		  </div>
		</div>
		
		<!-- Setting profile section -->
		<div class="border shadow-sm border-[#D9D9D9] rounded-xl px-2 py-3 md:px-3 md:py-11 flex flex-col gap-2 md:gap-6 md:w-[20%]" style="background-color: #f9f9f9;">
		  <!-- Edit profile button -->
		  <button @click="$router.push('/users/edit-profile')" class="bg-[#2B9FDC] text-[12px] hover:bg-sky-600 md:text-[16px] md:p-2 text-white justify-start w-[100%] flex flex-row p-1 gap-2 rounded-md">
			<img src="../../../assets/akun.svg" class="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" alt="Edit Profile Icon" />Edit profile
		  </button>
		  
		  <!-- Change password button -->
		  <button @click="$router.push('/users/ganti-password')" class="bg-[#2B9FDC] text-[12px] hover:bg-sky-600 md:text-[16px] md:p-2 text-white justify-start w-[100%] flex flex-row p-1 gap-2 rounded-md">
			<img src="../../../assets/password.svg" class="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" alt="Change Password Icon" />Ubah password
		  </button>
		  
		  <!-- Information button -->
		  <button @click="$router.push('/users/informasi')" class="bg-[#2B9FDC] text-[12px] hover:bg-sky-600 md:text-[16px] md:p-2 text-white justify-start w-[100%] flex flex-row p-1 gap-2 rounded-md">
			<img src="../../../assets/informasi.svg" class="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" alt="Information Icon" />Informasi
		  </button>
		</div>
	  </div>
	</div>
  </template>
  
<script>
import { useUserStore } from "../../../stores/user.store";

export default {
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  mounted() {
    this.userStore.detail();
  },
};
</script>