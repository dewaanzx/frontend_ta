<template>
  <section class="w-[80%] mx-auto flex flex-col gap-8">
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
              >Ambil Material</span
            >
          </div>
        </li>
      </ol>
    </nav>

    <article
      class="border border-[#D9D9D9] rounded-lg md:rounded-[36px] p-5 md:p-[36px] text-[12px] md:text-[16px]"
    >
      <form
        @submit.prevent="take"
        action=""
        class="flex flex-col gap-4 md:gap-20 md:flex-row"
      >
        <span class="md:w-[15%]">Bukti Ambil Mobil</span>
        <div class="md:w-[80%] flex flex-col md:gap-9 gap-2">
          <div class="flex flex-row gap-5">
            <div class="flex flex-col gap-1">
              <Label>Tanggal</Label>
              <input
                type="date"
                class="rounded-md p-1 md:rounded-[16px] text-[10px] md:p-3 md:text-[12px] hover:bg-slate-100 border border-[#D9D9D9]"
                v-model="formData.date"
              />
            </div>
            <div class="flex flex-col gap-1">
              <Label>Jam</Label>
              <input
                type="time"
                class="rounded-md p-1 md:rounded-[16px] md:p-3 text-[10px] md:text-[12px] hover:bg-slate-100 border border-[#D9D9D9]"
                v-model="formData.time_taken"
              />
            </div>
          </div>
          <!-- upload foto -->
          <div>
            <label for="">Upload Foto</label>
            <label
              for="imageinput"
              class="flex flex-col items-center justify-center border-2 border-dashed md:rounded-[24px] border-[#131A29] rounded-md cursor-pointer hover:bg-slate-100 opacity-60 p-5"
            >
              <div class="grid justify-items-center space-y-2">
                <img src="../../../assets/camera.svg" alt="" />
              </div>
              <input
                type="file"
                class="file:hidden w-[45%] text-[11px] md:w-[11%]"
                id="imageinput"
                @change="handlePicture"
                accept=".jpg, .jpeg, .png"
              />
            </label>
          </div>
          <!-- upload foto -->
          <div>
            <label for="">Upload SIM</label>
            <label
              for="imageinputSIM"
              class="flex flex-col items-center justify-center border-2 border-dashed md:rounded-[24px] border-[#131A29] rounded-md cursor-pointer hover:bg-slate-100 opacity-60 p-5"
            >
              <div class="grid justify-items-center space-y-2">
                <img src="../../../assets/camera.svg" alt="" />
              </div>
              <input
                type="file"
                class="file:hidden w-[45%] text-[11px] md:w-[11%]"
                id="imageinputSIM"
                @change="handleDrivingLicense"
                accept=".jpg, .jpeg, .png"
              />
            </label>
          </div>
          <!-- rectangle -->
          <div class="bg-[#D9D9D9] h-[1px] my-[20px] md:my-[36px]"></div>

          <div class="flex flex-row gap-3 justify-end">
            <button
              class="bg-gray-400 hover:bg-slate-500 md:px-8 md:py-[10px] md:rounded-[16px] text-white p-1 rounded-md"
            >
              Batal
            </button>
            <button
              class="bg-[#E26B00] md:hover:bg-orange-600 md:px-8 md:py-[10px] md:rounded-[16px] text-white p-1 rounded-md"
            >
              Konfirmasi
            </button>
          </div>
        </div>
      </form>
    </article>
  </section>
</template>
<script>
import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";

export default {
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
      formData: {
        date: null,
        time_taken: null,
        picture: null,
        driving_license: null,
      },
    };
  },
  methods: {
    handlePicture(e) {
      const picture = e.target.files[0];
      this.formData.picture = picture;
    },
    handleDrivingLicense(e) {
      const driving_license = e.target.files[0];
      this.formData.driving_license = driving_license;
    },
    async take() {
      const id = this.$route.params.id;
      let material_transaction = await this.materialTransactionStore.take(
        id,
        this.formData
      );

      if (material_transaction) {
        this.$router.push("/users");
      }
    },
  },
};
</script>
../../../stores/material_transaction.store