<template>
  <nav
    class="py-5 px-5 lg:px-[140px] lg:py-[10px] h-[80px] bg-[#D3E86A] xl:w-[100%]"
  >
    <div
      class="flex justify-between h-[60px] items-center"
      v-for="user in userStore.users"
    >
      <RouterLink :to="'/admin/menu/Semua'"
        ><img src="../assets/logo.png " class="h-[50px]" alt=""
      /></RouterLink>

      <!-- toggle responsive -->
      <button
        @click="toggleOpen"
        class="w-9 h-9 rounded-md animate-bounce animate-infinite animate-alternate-reverse md:hidden block"
      >
        <img src="../assets/more.png" class="h-[30px] w-[30px]" alt="" />
      </button>
      <!-- Bagian md: -->
      <div class="hidden sm:block">
        <ul class="flex flex-row gap-6">
          <li class="flex justify-center items-center">
            <button
              href=""
              class="flex justify-center flex-col items-center text-base gap-1 w-11 h-11 bg-[#D3E86A] hover:bg-sky-600 rounded-full"
            ></button>
          </li>
          <li class="flex justify-center items-center">
            <button @click="toggleOpen">
              <div class="flex justify-center items-center gap-3">
                <img
                  v-if="user.picture"
                  :src="
                    'http://api.pinjamin.appmedia.id/uploads/users/' +
                    user.picture
                  "
                  style="object-fit: cover"
                  class="h-[32px] w-[32px] rounded-full"
                  alt=""
                />
                <img
                  v-if="!user.picture"
                  src="/user.png"
                  style="object-fit: cover"
                  class="h-[32px] w-[32px] rounded-full"
                  alt=""
                />
                <span class="text-white">{{ user.name }}</span>
              </div>
            </button>
          </li>
          <!-- <li class="flex justify-center items-center">
            <Button
              @click="authStore.logout()"
              class="flex justify-center items-center text-[12px] text-white font-semibold w-[40px] h-[28px] rounded-lg bg-red-500 hover:bg-red-700"
            >
              <img
                src="../assets/keluar.png"
                class="w-[15px] h-[15px]"
                alt=""
              />
            </Button>
          </li> -->
        </ul>
      </div>
    </div>
    <div
      v-show="open"
      class="fixed bg-[#fff] flex flex-col gap-2 rounded-md md:right-[10%] right-[10%] animate-fade-up z-50 p-5 shadow-md"
      v-for="user in userStore.users"
    >
      <div class="flex flex-row justify-start items-center gap-3">
        <span class="text-[12px] font-semibold">
          {{ user.name }}
        </span>
      </div>
      <div class="h-[1px] bg-gray-300"></div>
      <div>
        <button class="text-red-700" @click="authStore.logout()">Keluar</button>
      </div>
    </div>
  </nav>

  <div class="flex flex-row">
    <div class="flex flex-row pt-[-20px] gap-5 md:gap-10">
      <!-- sidebar -->
      <nav
        class="bg-white border-r shadow-sm h-[100vmax] relative w-[15vw] md:w-[20vw]"
      >
        <!-- versi desktopnya -->
        <div class="hidden md:block">
          <div>
            <button
              @click="toggleMenu"
              class="flex gap-4 justify-center items-center p-3 w-full"
            >
              <img
                src="../assets/layout-masonry-line.png"
                class="w-[2vw] h-[2vw]"
                alt=""
              />
              <p class="w-[60%] text-[#373535] text-[18px]">Main Menu</p>
              <img
                src="../assets/down-s-line.png"
                class="w-[2vw] h-[2vw]"
                alt=""
              />
            </button>
          </div>
          <div v-show="openmenu" class="flex flex-col gap-1">
            <button
              @click="$router.push('/admin/menu/Semua')"
              class="flex gap-10 justify-center items-center hover:bg-gray-100 p-3 text-[#666666] w-full"
            >
              <p>Pengambilan</p>
            </button>
            <button
              @click="$router.push('/admin/konfirmasi')"
              class="flex gap-10 justify-center items-center hover:bg-gray-100 p-3 text-[#666666] w-full"
            >
              <p>Konfirmasi</p>
            </button>
            <button
              @click="$router.push('/admin/report')"
              class="flex gap-10 justify-center items-center hover:bg-gray-100 p-3 text-[#666666] w-full"
            >
              <p>Report</p>
            </button>
          </div>
          <!-- akhir main menu dekstop -->

          <!-- bagian master data -->
          <div>
            <button
              @click="toggleMaster"
              class="flex gap-4 justify-center items-center p-3 w-full"
            >
              <img src="../assets/server.png" class="w-[2vw] h-[2vw]" alt="" />
              <p class="w-[60%] text-[#373535] text-[18px]">Master Data</p>
              <img
                src="../assets/down-s-line.png"
                class="w-[2vw] h-[2vw]"
                alt=""
              />
            </button>
          </div>
          <div v-show="openmaster" class="flex flex-col gap-1">
            <button
              @click="$router.push('/admin/master-material')"
              class="flex gap-10 justify-center items-center p-3 hover:bg-gray-100 text-[#666666] w-full"
            >
              <p>Material</p>
            </button>
            <button
              @click="$router.push('/admin/master-pegawai')"
              class="flex gap-10 justify-center items-center p-3 hover:bg-gray-100 text-[#666666] w-full"
            >
              <p>Pegawai</p>
            </button>
            <button
              @click="$router.push('/admin/master-divisi')"
              class="flex gap-10 justify-center items-center p-3 hover:bg-gray-100 text-[#666666] w-full"
            >
              <p>Divisi</p>
            </button>
          </div>
          <!-- akhir master data dekstop -->
        </div>

        <!-- bagian main menu -->

        <!-- button untuk responsivenya -->
        <button
          @click="toggleSidebar"
          class="w-9 h-9 rounded-md px-[3px] mt-3 ml-4 hover:bg-gray-100 md:hidden"
        >
          <img src="../assets/hamburger.png" class="h-[25px] w-[25px]" alt="" />
        </button>
      </nav>
      <nav
        v-show="opensidebar"
        class="bg-white shadow-md absolute w-[70vw] h-[100vmax] py-3 px-4 flex flex-col gap-2"
      >
        <div>
          <div class="w-full">
            <button
              @click="toggleSidebar"
              class="w-9 h-9 rounded-md px-[3px] bg-gray-100 md:hidden"
            >
              <img
                src="../assets/hamburger.png"
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
              src="../assets/layout-masonry-line.png"
              class="w-[5vw] h-[5vw]"
              alt=""
            />
            <p class="w-[30vw] text-[#373535]">Main Menu</p>
            <img
              src="../assets/down-s-line.png"
              class="w-[5vw] h-[5vw]"
              alt=""
            />
          </button>
        </div>

        <!-- Sidebar -->
        <!-- Main Main Menu -->
        <div v-show="openmenu" class="flex flex-col gap-1">
          <button
            @click="$router.push('/admin/menu/Semua')"
            class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
          >
            <p>Pengambilan</p>
          </button>
          <button
            @click="$router.push('/admin/konfirmasi')"
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
            <img src="../assets/server.png" class="w-[5vw] h-[5vw]" alt="" />
            <p class="w-[30vw] text-[#373535]">Master Data</p>
            <img
              src="../assets/down-s-line.png"
              class="w-[5vw] h-[5vw]"
              alt=""
            />
          </button>
        </div>
        <div v-show="openmaster" class="flex flex-col gap-1">
          <button
            @click="$router.push('/admin/master-material')"
            class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
          >
            <p>Material</p>
          </button>
          <button
            @click="$router.push('/admin/master-pegawai')"
            class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
          >
            <p>Pegawai</p>
          </button>
          <button
            @click="$router.push('/admin/master-divisi')"
            class="flex gap-10 justify-center items-center p-3 text-[#666666] w-full"
          >
            <p>Divisi</p>
          </button>
        </div>
      </nav>
    </div>
    <div class="p-5 w-[80%]">
      <slot />
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth.store.js";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user.store";

export default {
  name: "Navbar",
  data() {
    const open = ref(false);
    const openmenu = ref(false);
    const openmaster = ref(false);
    const opensidebar = ref(false);
    const toggleOpen = () => {
      open.value = !open.value;
    };
    const buka = ref(false);

    const ProfilOpen = () => {
      buka.value = !buka.value;
    };
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
      userStore: useUserStore(),
      authStore: useAuthStore(),
      open,
      toggleOpen,
      buka,
      ProfilOpen,
      openmenu,
      toggleMenu,
      openmaster,
      toggleMaster,
      opensidebar,
      toggleSidebar,
    };
  },
  mounted() {
    this.userStore.detail().then(() => {
      const user = this.userStore.users[0];

      this.checkPermission(user.role);
    });
  },
  methods: {
    checkPermission(role) {
      if (role == "User") {
        this.$router.push("/users");
      } else if (role == "SPV Cars") {
        this.$router.push("/spv-mobil");
      } else if (role == "SPV Rooms") {
        this.$router.push("/spv-ruangan");
      } else if (role == "Satpam") {
        this.$router.push("/satpam");
      }
    },
    goToProfile() {
      // Pindahkan ke halaman profil
      this.$router.push("/users/profile");
      // Tutup elemen v-show
      this.open = false;
    },
    redirect() {
      console.log("bukan admin");
    },
  },
  components: { RouterLink },
};
</script>
