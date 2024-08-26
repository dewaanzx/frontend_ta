<template>
	<!-- Breadcrumb Navigation -->
	<nav class="flex mb-6" aria-label="Breadcrumb">
	  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		<li class="inline-flex items-center">
		  <button
			@click="$router.push('/admin/master-pegawai')"
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
			>Detail Pegawai</span>
		  </div>
		</li>
	  </ol>
	</nav>
  <!-- main content -->
  <section class="mt-4">
  <div class="p-6 md:p-9 rounded-lg border border-gray-700 bg-gray-50 flex flex-col gap-6">
    <div class="grid md:flex md:flex-row md:justify-between gap-4">
      <span class="text-base md:text-lg text-blue-600 font-semibold">Informasi Pegawai</span>
      <div class="grid gap-2 md:w-[80%]">
        <div class="flex flex-col text-sm gap-1">
          <p class="text-base font-medium">Nama</p>
          <p class="text-sm md:text-base">{{ userStore2.users2.name }}</p>
        </div>
        <div class="flex flex-col text-sm gap-1">
          <p class="text-base font-medium">Email</p>
          <p class="text-sm md:text-base">{{ userStore2.users2.email }}</p>
        </div>
        <div class="flex flex-col text-sm gap-1">
          <p class="text-base font-medium">Nomor Telepon</p>
          <p class="text-sm md:text-base">{{ userStore2.users2.phone }}</p>
        </div>
        <div class="flex flex-col text-sm gap-1">
          <p class="text-base font-medium">Divisi</p>
          <p class="text-sm md:text-base">{{ userStore2.users2.division }}</p>
        </div>
        <div class="flex flex-col text-sm gap-1">
          <p class="text-base font-medium">Foto Profile</p>
          <img
  :src="'http://localhost:8080/uploads/users/' + userStore2.users2.picture"
  class="w-full max-h-[400px] object-contain border rounded-md"
  alt="Profile Picture"
/>
        </div>
      </div>
    </div>
  </div>
</section>

</template><script>
import { useUser2Store } from "../../../stores/user.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      userStore2: useUser2Store(),
    };
  },
  beforeRouteEnter(to, from, next) {
    const userStore2 = useUser2Store();
    const { id } = to.params;

    userStore2.show(id).then(() => {
      next(vm => {
        vm.userStore2 = userStore2;
      });
    });
  },
};
</script>
