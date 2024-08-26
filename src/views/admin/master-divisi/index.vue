<template>
	<div
	  class="p-4 w-[75%] md:w-[30vh] shadow-sm rounded-[24px] border-2 flex flex-col gap-3 bg-blue-400"
	>
	  <span class="text-[14px] text-white" style="line-height: 1.2em"> Jumlah Divisi</span>
	  <div class="flex flex-row justify-between">
		<P class="text-[34px] text-white">
		  {{ DivisionStore.countDivision.countDivision }}
		</P>
	  </div>
	</div>
	<section>
	  <article class="mt-4">
		<div class="md:flex md:flex-row-reverse md:justify-end md:gap-3">
		  <div class="my-auto">
			<input
			  v-model="searchQuery"
			  type="text"
			  name=""
			  class="border border-black px-3 inline-block rounded-[12px] text-[12px] md:text-[16px] h-[40px]"
			  placeholder="Cari Divisi"
			  id=""
			/>
		  </div>
  
		  <button
			@click="$router.push('/admin/master-divisi/tambah')"
			class="bg-[#E26B00] hover:bg-orange-600 text-white px-3 py-2 flex flex-row items-center rounded-[12px] text-[12px] md:text-[16px] gap-1 my-2 shadow-sm"
		  >
			<img
			  class="h-[18px] md:h-[22px]"
			  src="../../../assets/plus.svg"
			  alt=""
			/>
			Tambah Divisi
		  </button>
		</div>
	  </article>
	  <section class="mt-4 p-3 md:p-5 border-[1.5px] border-black rounded-[24px] shadow-sm" style="background-color: #f5f5f5;">
  <div class="w-full overflow-auto touch-auto">
    <table class="w-full my-3 border-collapse border border-black">
      <thead>
        <tr class="text-[14px] md:text-[16px] font-semibold border-b border-black">
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Nama</th>
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="division in paginatedDivisions" class="text-[12px] md:text-[14px] border-b border-black">
          <td class="text-center py-4 pr-4 pl-2 border border-black">{{ division.name }}</td>
          <td class="text-center py-4 pr-4 pl-2 border border-black">
            <div class="flex justify-center gap-2">
              <!-- Edit Button -->
              <button @click="$router.push('/admin/master-divisi/edit/' + division.id)" class="bg-blue-400 text-white rounded-full p-2 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
                  <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/>
                    <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"/>
                  </g>
                </svg>
              </button>
              <!-- Delete Button -->
              <button @click="confirmDelete(division.id)" class="bg-red-400 text-white rounded-full p-2 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06"/><path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0"/></g></svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-end mt-4">
      <button
        @click="currentPage -= 1"
        :disabled="currentPage === 1"
        class="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed transition duration-300 ease-in-out hover:bg-blue-600"
      >
        Previous
      </button>
      <span class="mx-2 py-2 px-4 rounded-lg bg-gray-200 text-gray-800">
        {{ currentPage }}
      </span>
      <button
        @click="currentPage += 1"
        :disabled="currentPage * itemsPerPage >= DivisionStore.divisions.length"
        class="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed transition duration-300 ease-in-out hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  </div>
</section>

	</section>
  </template>
  <script>
  import { useDivisionStore } from "../../../stores/division.store";
  import { useRoute } from "vue-router";
  
  export default {
	data() {
	  return {
		DivisionStore: useDivisionStore(),
		status: null,
		currentPage: 1,
		itemsPerPage: 5,
		searchQuery: "",
	  };
	},
	methods: {
	  confirmDelete(id) {
		if (window.confirm("Apakah anda yakin ingin menghapus ini?")) {
		  this.deleteDivision(id);
		}
	  },
	  deleteDivision(id) {
		this.DivisionStore.delete(id).then(() => {
		  this.DivisionStore.fetch();
		});
	  },
	},
	beforeRouteEnter(to, from, next) {
	  const DivisionStore = useDivisionStore();
  
	  DivisionStore.fetch().then(() => {
		next((vm) => {
		  vm.DivisionStore = DivisionStore;
		});
	  });
	},
	computed: {
	  filteredDivisions() {
		const searchQuery = this.searchQuery.toLowerCase();
		return this.DivisionStore.divisions.filter((division) => {
		  return division.name.toLowerCase().includes(searchQuery);
		});
	  },
	  paginatedDivisions() {
		const startIndex = (this.currentPage - 1) * this.itemsPerPage;
		const endIndex = startIndex + this.itemsPerPage;
		return this.filteredDivisions.slice(startIndex, endIndex);
	  },
	},
  };
  </script>
  