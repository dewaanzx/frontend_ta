<template>
  <div
    class="p-4 w-[75%] md:w-[30vh] shadow-sm rounded-[24px] border-2 flex flex-col gap-3 bg-blue-400"
  >
    <span class="text-[14px] text-white" style="line-height: 1.2em"
      >Daftar Pegawai</span
    >
    <div class="flex flex-row justify-between">
      <div class="flex flex-row justify-between">
        <P class="text-[34px] text-white">
          {{ userStore2.countUser.countUsers }}
        </P>
      </div>
    </div>
  </div>
  <section>
    <article class="mt-4">
      <div class="md:flex md:flex-row-reverse md:justify-end md:gap-3">
        <div class="my-auto">
          <input
            v-model="searchQuery"
            type="text"
            class="border border-black px-3 inline-block rounded-[12px] text-[12px] md:text-[16px] h-[40px]"
            placeholder="Cari Pegawai"
          />
        </div>
      </div>
    </article>
    <section
      class="mt-4 p-3 md:p-5 border-[1.5px] border-black rounded-[24px] shadow-sm"
      style="background-color: #f5f5f5"
    >
      <div>
        <!-- Table Section -->
        <div class="w-full overflow-auto touch-auto">
          <table class="w-full my-3 border-collapse border border-black">
            <tr
              class="text-[14px] md:text-[16px] font-semibold border-b border-black"
            >
              <th
                class="font-medium text-center py-4 pr-4 pl-2 border border-black"
              >
                Nama
              </th>
              <th
                class="font-medium text-center py-4 pr-4 pl-2 border border-black"
              >
                Email
              </th>
              <th
                class="font-medium text-center py-4 pr-4 pl-2 border border-black"
              >
                Nomor Telepon
              </th>
              <th
                class="font-medium text-center py-4 pr-4 pl-2 border border-black"
              >
                Status
              </th>
              <th
                class="font-medium text-center py-4 pr-4 pl-2 border border-black"
              >
                Aksi
              </th>
            </tr>
            <tr
              v-for="user in paginatedUsers"
              :key="user.id"
              class="text-[12px] md:text-[14px] border-b border-black"
            >
              <td class="pr-4 pl-2 md:py-4 border border-black text-center">
                {{ user.name }}
              </td>
              <td class="pr-4 pl-2 md:py-4 border border-black text-center">
                {{ user.email }}
              </td>
              <td class="pr-4 pl-2 md:py-4 border border-black text-center">
                {{ user.phone }}
              </td>
              <td class="pr-4 pl-2 md:py-4 border border-black text-center">
                <!-- Status Icons -->
                <!-- Verified Status -->
                <span
                  v-if="user.status === 'verified'"
                  style="
                    background-color: #4caf50;
                    color: white;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-weight: bold;
                  "
                >
                  Verified
                </span>

                <!-- Unverified Status -->
                <span
                  v-if="user.status === 'unverified'"
                  style="
                    background-color: #f44336;
                    color: white;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-weight: bold;
                  "
                >
                  Unverified
                </span>
              </td>
              <td
                class="flex flex-col justify-center items-center text-[12px] gap-1 md:gap-2 py-2 md:py-5 border border-black"
              >
                <!-- Detail Button -->
                <button
                  @click="
                    $router.push('/admin/master-pegawai/detail/' + user.id)
                  "
                  class="bg-gray-400 text-white rounded-full p-2 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#25282b"
                      d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                    />
                  </svg>
                </button>

                <!-- Verification Button (Only shown if user is unverified) -->
                <button
                  v-if="user.status === 'unverified'"
                  @click="verifyUser(user.id)"
                  class="bg-green-400 text-white rounded-full p-2 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ffffff"
                      d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </table>

          <!-- Pagination Section -->
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
              :disabled="currentPage * itemsPerPage >= userStore2.users2.length"
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
import axios from "axios";
import { useUser2Store } from "../../../stores/user.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      userStore2: useUser2Store(),
      currentPage: 1,
      itemsPerPage: 5,
      searchQuery: "",
    };
  },
  methods: {
    async verifyUser(userId) {
      try {
        // Make the PUT request to verify the user
        const response = await axios.put(
          `http://localhost:8080/user/verify/${userId}`
        );

        // Optionally, you can handle the response, e.g., show a success message
        alert("User verified successfully!");

        // Update the user list in the store
        this.userStore2.fetch();
      } catch (error) {
        // Handle error, e.g., show an error message
        alert("An error occurred while verifying the user.");
        console.error("Error verifying user:", error);
      }
    },
    confirmDelete(id) {
      if (window.confirm("Apakah anda yakin ingin menghapus ini?")) {
        this.deleteUser(id);
      }
    },
    deleteUser(id) {
      this.userStore2.delete(id).then(() => {
        this.userStore2.fetch();
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    const userStore2 = useUser2Store();

    userStore2.fetch().then(() => {
      next((vm) => {
        vm.userStore2 = userStore2;
      });
    });
  },
  computed: {
    filteredUsers() {
      const searchQuery = this.searchQuery.toLowerCase();
      return this.userStore2.users2.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchQuery) ||
          user.email.toLowerCase().includes(searchQuery) ||
          user.phone.toLowerCase().includes(searchQuery)
        );
      });
    },
    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredUsers.slice(startIndex, endIndex);
    },
  },
};
</script>
