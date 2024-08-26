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
              >Detail</span
            >
          </div>
        </li>
      </ol>
    </nav>

    <!-- bagian form edit data -->
   <div class="flex justify-center items-center min-h-screen">
  <article class="border border-[#D9D9D9] rounded-lg p-4 md:p-9 w-full max-w-4xl" style="background-color: #25282b; color: #ffffff;">
    <div class="flex flex-col md:flex-row justify-start text-[12px] md:text-[16px] gap-4 md:gap-20">
      <form action="" @submit.prevent="update" class="flex flex-col items-center w-full">
        <span class="bg-blue-400 w-full text-center mb-4 p-2 rounded-md md:rounded-[16px]">Informasi Akun</span>
        <div class="flex flex-wrap md:grid gap-2 md:grid-cols-2 md:gap-4 w-full" v-for="user in userStore.users">
          <div class="flex flex-col">
            <label for="" style="color: #ffffff;">Nama</label>
            <input
              type="text"
              name=""
              id=""
              class="border border-[#D9D9D9] text-[10px] md:text-[14px] rounded-md p-1"
              v-model="formData.name"
              style="color: #000000;"
            />
          </div>
          <div class="flex flex-col">
            <label for="" style="color: #ffffff;">Email</label>
            <input
              type="Email"
              name=""
              id=""
              class="border border-[#D9D9D9] text-[10px] md:text-[14px] rounded-md p-1"
              v-model="formData.email"
              style="color: #000000;"
            />
          </div>
          <div class="flex flex-col">
            <label for="" style="color: #ffffff;">No.Handphone</label>
            <input
              type="number"
              name=""
              id=""
              class="border border-[#D9D9D9] text-[10px] md:text-[14px] rounded-md p-1"
              v-model="formData.phone"
              style="color: #000000;"
            />
          </div>
          <div class="flex flex-col">
            <label for="" style="color: #ffffff;">Divisi</label>
            <select
              name=""
              id=""
              class="border border-[#D9D9D9] text-[10px] md:text-[14px] rounded-md p-1"
              v-model="formData.division"
              style="color: #000000;"
            >
              <option :value="formData.division">{{ formData.division }}</option>
              <option v-for="division in divisionStore.divisions" :value="division.name">{{ division.name }}</option>
            </select>
          </div>
          <div class="flex flex-col gap-1">
            <label for="" style="color: #ffffff;">Foto</label>
            <label for="imageinput" class="bg-red-200 w-[7vmax] h-[7vmax] rounded-full">
              <img :src="'http://localhost:8080/uploads/users/' + user.picture" alt="" style="object-fit: cover" class="w-[7vmax] h-[7vmax] rounded-full" />
            </label>
            <input
              type="file"
              class="file:hidden"
              id="imageinput"
              @change="handleFileChange"
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </div>
        <div class="mt-4 flex gap-4 justify-end w-full">
          <Button class="bg-red-500 py-1 px-3 text-[11px] md:text-[16px] text-white rounded-lg hover:bg-red-700" @click="$router.push('/users/profile')">Batal</Button>
          <Button class="bg-[#E26B00] py-1 px-3 text-[11px] md:text-[16px] text-white rounded-lg hover:bg-orange-600">Simpan</Button>
        </div>
      </form>
    </div>
  </article>
</div>

  </section>
</template>
<script>
import { useDivisionStore } from "../../../stores/division.store";
import { useUserStore } from "../../../stores/user.store";

export default {
  data() {
    return {
      divisionStore: useDivisionStore(),
      userStore: useUserStore(),
      formData: {
        id: null,
        name: null,
        email: null,
        phone: null,
        division: null,
        role: null,
        picture: null,
      },
    };
  },
  methods: {
    handleFileChange(e) {
      const picture = e.target.files[0];
      this.formData.picture = picture;
    },
    async create() {
      let user = await this.userStore.add(this.formData);

      if (user) {
        this.$router.push("/users");
      }
    },
    async update() {
      let user = await this.userStore.updateProfile(this.formData);

      if (user) {
        this.userStore.detail();
      }
    },
  },
  mounted() {
    this.userStore.detail().then(() => {
      const user = this.userStore.users[0];

      this.formData.id = user.id;
      this.formData.name = user.name;
      this.formData.email = user.email;
      this.formData.phone = user.phone;
      this.formData.division = user.division;
      this.formData.role = user.role;

      this.divisionStore.nonSelected(user.division);
    });
  },
};
</script>
