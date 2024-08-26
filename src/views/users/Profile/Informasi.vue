<template>
	<section class="w-[80%] mx-auto flex flex-col">
	  <!-- bagian breadcrum -->
	  <nav class="flex" aria-label="Breadcrumb">
		<ol
		  class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
		>
		  <li class="inline-flex items-center">
			<button
			  @click="$router.push('/users')"
			  class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
			>
			  Home
			</button>
		  </li>
		  <li>
			  <div class="flex items-center">
			  <svg
				class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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
				@click="$router.push('/users/profile')"
				class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
			  >
				Profile
			  </button>
			</div>
		  </li>
		  <li>
			<div class="flex items-center">
			  <svg
				class="rtl:rotate-180 w-3 h-3 text-black mx-1"
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
				class="ms-1 text-sm md:text-lg text-black md:ms-2 dark:text-black"
				>Informasi</span
			  >
			</div>
		  </li>
		</ol>
	  </nav>
  
	  <!-- bagian form edit data -->
	  <div class="flex justify-center items-center min-h-screen">
      <article class="border border-[#D9D9D9] rounded-lg md:rounded-[36px] p-4 md:p-9 w-full max-w-2xl" style="background-color: #25282b;">
        <form @submit.prevent="update" class="flex flex-col items-center" style="color: #ffffff;">
          <span class="bg-blue-400 w-full text-center mb-4 p-2 rounded-md md:rounded-[16px]">PT. Telkom Witel Magelang</span>
          <div class="w-full max-w-md">
            <div class="text-center mb-6">
              <p class="text-sm md:text-base leading-relaxed">
                Telkom berperan sebagai penyedia layanan informasi dan komunikasi serta jaringan telekomunikasi di Indonesia, Telkom Indonesia senantiasa berkomitmen memberikan pelayanan yang terbaik guna membawa perubahan dan perkembangan #UntukIndonesiaLebihBaik.
              </p>
            </div>
          </div>
          <div class="mt-6 flex gap-4 justify-center w-full">
            <button
              class="bg-red-500 py-2 px-4 text-[11px] md:text-[16px] text-white rounded-lg hover:bg-red-700"
              @click="$router.push('/users/profile')"
            >
              Kembali
            </button>
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
	  };
	},
	methods: {
	  async update() {
		let user = await this.userStore.updatePassword(this.formData);
  
		if (user) {
		  this.$router.push("/users/ganti-password");
		}
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
  