<template>
  <div class="flex flex-row gap-5 md:gap-10">
    <!-- navbar -->
    <nav
      class="bg-white border-r shadow-sm ml-[-20px] my-[-20px] h-[100vmax] relative w-[15vw] md:w-[20vw]"
    >
      <button
        @click="toggleSidebar"
        class="w-9 h-9 rounded-md px-[3px] mt-3 ml-4 hover:bg-gray-100 md:hidden"
      >
        <img
          src="../../assets/hamburger.png"
          class="h-[25px] w-[25px]"
          alt=""
        />
      </button>
    </nav>
    <nav
      v-show="opensidebar"
      class="bg-white shadow-md absolute ml-[-20px] mt-[-20px] w-[70vw] h-[100vmax] py-3 px-4 flex flex-col gap-2"
    >
      <div>
        <div class="w-full">
          <button
            @click="toggleSidebar"
            class="w-9 h-9 rounded-md px-[3px] hover:bg-gray-100 md:hidden"
          >
            <img
              src="../../assets/hamburger.png"
              class="h-[25px] w-[25px]"
              alt=""
            />
          </button>
        </div>

        <button
          @click="toggleMenu"
          class="flex gap-10 justify-center items-center p-3 w-full"
        >
          <img
            src="../../assets/layout-masonry-line.png"
            class="w-[5vw] h-[5vw]"
            alt=""
          />
          <p class="w-[30vw] text-[#373535]">Main Menu</p>
          <img
            src="../../assets/down-s-line.png"
            class="w-[5vw] h-[5vw]"
            alt=""
          />
        </button>
      </div>

      <!-- Sidebar -->
      <!-- Main Main Menu -->
      <div v-show="openmenu" class="flex flex-col gap-1">
        <button
          class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
        >
          <p>Pengambilan</p>
        </button>
        <button
          class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
        >
          <p>Konfirmasi</p>
        </button>
      </div>

      <!-- Sidebar -->
      <!-- MasterData -->
      <div>
        <button
          @click="toggleMaster"
          class="flex gap-10 justify-center items-center p-3 w-full"
        >
          <img
            src="../../assets/layout-masonry-line.png"
            class="w-[5vw] h-[5vw]"
            alt=""
          />
          <p class="w-[30vw] text-[#373535]">Master Data</p>
          <img
            src="../../assets/down-s-line.png"
            class="w-[5vw] h-[5vw]"
            alt=""
          />
        </button>
      </div>
      <div v-show="openmaster" class="flex flex-col gap-1">
        <button
          class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
        >
          <p>Mobil</p>
        </button>
        <button
          class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
        >
          <p>Ruangan</p>
        </button>
        <button
          class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
        >
          <p>Peminjam</p>
        </button>
        <button
          class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
        >
          <p>Divisi</p>
        </button>
        <button
          class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
        >
          <p>Sopir</p>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth.store.js";
import { ref } from "vue";

export default {
  name: "Sidebar",
  data() {
    const openmenu = ref(false);
    const openmaster = ref(false);
    const opensidebar = ref(false);
    const toggleMenu = () => {
      openmenu.value = !openmenu.value;
    };
    const toggleMaster = () => {
      openmaster.value = !openmaster.value;
    };
    const toggleSidebar = () => {
      opensidebar.value = !opensidebar.value;
    };
    return {
      authStore: useAuthStore(),
      openmenu,
      toggleMenu,
      openmaster,
      toggleMaster,
      opensidebar,
      toggleSidebar,
    };
  },
};
</script>
