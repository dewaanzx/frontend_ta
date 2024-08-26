<template>
	<section>
		<article class="mt-4">
    <div class="md:flex md:flex-row-reverse md:justify-end md:gap-3">
      <div class="my-auto">
        <input
          v-model="searchQuery"
          type="text"
          class="border border-black px-3 inline-block rounded-[12px] text-[12px] md:text-[16px] h-[40px]"
          placeholder="Cari Transaksi"
        />
      </div>
    </div>
  </article>
	  <section class="mt-4 p-3 md:p-5 border-[1.5px] border-black rounded-[24px] shadow-sm" style="background-color: #f5f5f5;">
  <div>
    <!-- Bagian button -->
    <div class="flex flex-wrap gap-3 justify-center md:justify-start border-b-[1.5px] border-black pb-4">
		<RouterLink :to="'/admin/menu/Semua'">
  <button
    class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border-[1.5px] border-black rounded-lg md:rounded-[16px] font-bold"
    @click="fetchByStatus('Semua')"
    :class="
      $route.params.status == 'Semua'
        ? 'text-white bg-blue-500'
        : 'bg-gray-200 text-black'
    "
    style="padding: 4px 8px; border-radius: 4px;"
  >
    Semua
  </button>
</RouterLink>
<RouterLink :to="'/admin/menu/Diambil'">
  <button
    class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border-[1.5px] border-black rounded-lg md:rounded-[16px] font-bold"
    @click="fetchByStatus('Diambil')"
    :class="
      $route.params.status == 'Diambil'
        ? 'text-white bg-yellow-500'
        : 'bg-gray-200 text-black'
    "
    style="padding: 4px 8px; border-radius: 4px;"
  >
    Diambil
  </button>
</RouterLink>
<RouterLink :to="'/admin/menu/Dikonfirmasi'">
  <button
    class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border-[1.5px] border-black rounded-lg md:rounded-[16px] font-bold"
    @click="fetchByStatus('Dikonfirmasi')"
    :class="
      $route.params.status == 'Dikonfirmasi'
        ? 'text-white bg-green-500'
        : 'bg-gray-200 text-black'
    "
    style="padding: 4px 8px; border-radius: 4px;"
  >
    Dikonfirmasi
  </button>
</RouterLink>


    </div>

    <div class="w-full overflow-auto touch-auto mt-4">
      <table class="w-full my-3 border-collapse border border-black">
        <tr class="text-[14px] md:text-[16px] font-semibold border-b border-black px-3">
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Tujuan</th>
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Tanggal</th>
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Jam</th>
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Deskripsi</th>
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Pegawai</th>
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Material</th>
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Status</th>
          <th class="font-medium text-center py-4 pr-4 pl-2 border border-black">Aksi</th>
        </tr>
        <tr v-for="material_transaction in paginatedMaterialTransactions" class="text-[12px] md:text-[14px] border-b border-black">
          <td class="pr-4 pl-2 md:py-4 border border-black text-center">{{ material_transaction.destination }}</td>
          <td class="pr-4 pl-2 md:py-4 border border-black text-center">{{ material_transaction.date_start }}</td>
          <td class="pr-4 pl-2 md:py-4 border border-black text-center">{{ material_transaction.time_start }}</td>
          <td class="pr-4 pl-2 md:py-4 border border-black text-center">{{ material_transaction.description }}</td>
          <td class="pr-4 pl-2 md:py-4 border border-black text-center">{{ material_transaction.user_name }}</td>
          <td class="pr-4 pl-2 md:py-4 border border-black text-center">{{ material_transaction.material_name }}</td>
          <td class="pr-4 pl-2 md:py-4 border border-black text-center">{{ material_transaction.status }}</td>
          <td class="flex flex-col justify-center items-center text-[12px] gap-1 md:gap-2 py-2 md:py-5 border border-black">
            <button @click="$router.push('/admin/menu/edit/' + material_transaction.id)" class="bg-blue-400 text-white rounded-full p-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
                <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/>
                  <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"/>
                </g>
              </svg>
            </button>

            <button @click="$router.push('/admin/menu/detail/' + material_transaction.id)" class="bg-gray-400 text-white rounded-full p-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
                <path fill="#25282b" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>
              </svg>
            </button>

            <button @click="confirmDelete(material_transaction.id)" class="bg-red-400 text-white rounded-full p-2 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06"/><path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0"/></g></svg>
            </button>
          </td>
        </tr>
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
          :disabled="currentPage * itemsPerPage >= materialTransactionStore.material_transactions.length"
          class="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed transition duration-300 ease-in-out hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</section>
	</section>
  </template>
  <script>
  import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
  import { useRoute } from "vue-router";
  
  export default {
	data() {
	  return {
		materialTransactionStore: useMaterialTransactionStore(),
		status: null,
		currentPage: 1,
		itemsPerPage: 5,
		searchQuery: '',
	  };
	},
	methods: {
	  confirmDelete(id) {
		if (window.confirm("Apakah anda yakin ingin menghapus ini?")) {
		  this.deleteMaterialTransaction(id);
		}
	  },
	  deleteMaterialTransaction(id) {
		const status = this.$route.params.status;
		this.materialTransactionStore.delete(id)
		  .then(() => {
			this.materialTransactionStore.fetchByStatus(status);
		  });
	  },
	  fetchByStatus(status) {
		this.materialTransactionStore.fetchByStatus(status);
	  },
	},
	beforeRouteEnter(to, from, next) {
	  const materialTransactionStore = useMaterialTransactionStore();
	  const status = to.params.status;
  
	  materialTransactionStore.fetchByStatus(status).then(() => {
		next(vm => {
		  vm.status = status;
		  vm.materialTransactionStore = materialTransactionStore;
		});
	  });
	},
	mounted() {
	  const status = this.$route.params.status;
	  this.status = status;
	},
	computed: {
	  filteredMaterialTransactions() {
		const searchQuery = this.searchQuery.toLowerCase();
		return this.materialTransactionStore.material_transactions.filter(material_transaction => {
		  return (
			material_transaction.destination.toLowerCase().includes(searchQuery) ||
			material_transaction.date_start.toLowerCase().includes(searchQuery) ||
			material_transaction.time_start.toLowerCase().includes(searchQuery) ||
			material_transaction.description.toLowerCase().includes(searchQuery) ||
			material_transaction.material_name.toLowerCase().includes(searchQuery) ||
			material_transaction.user_name.toLowerCase().includes(searchQuery) ||
			material_transaction.status.toLowerCase().includes(searchQuery)
		  );
		});
	  },
	  paginatedMaterialTransactions() {
		const startIndex = (this.currentPage - 1) * this.itemsPerPage;
		const endIndex = startIndex + this.itemsPerPage;
		return this.filteredMaterialTransactions.slice(startIndex, endIndex);
	  },
	},
  };
  </script>
  
  ../../../stores/material_transaction.store