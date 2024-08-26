<template>
  <nav
    class="py-5 px-5 lg:px-[140px] lg:py-[10px] h-[80px] bg-[#D3E86A] xl:w-[100%]"
  >
    <div
      class="flex justify-between h-[60px] items-center"
      v-for="user in userStore.users"
    >
      <RouterLink :to="'/users'"
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
              @click="$router.push('/users/notifikasi')"
            >
              <img
                src="../assets/bell.svg"
                class="h-[25px] w-[25px] rounded-full text-2xl"
                alt=""
              />
            </button>
          </li>
          <li class="flex justify-center items-center">
            <button @click="toggleOpen">
              <div class="flex justify-center items-center gap-3">
                <img v-if="user.picture"
                  :src="'http://localhost:8080/uploads/users/' + user.picture"
                  style="object-fit: cover"
                  class="h-[32px] w-[32px] rounded-full"
                  alt=""
                />
                <img v-if="!user.picture"
                  src="/user.png"
                  style="object-fit: cover"
                  class="h-[32px] w-[32px] rounded-full"
                  alt=""
                />
                <span class="text-black font-medium">{{ user.name }}</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-show="open"
      class="fixed bg-[#25282B] flex flex-col gap-2 rounded-md md:right-[10%] right-[10%] animate-fade-up z-50 p-5 shadow-md"
      v-for="user in userStore.users"
    >
      <div class="flex flex-row justify-start items-center gap-3">
        <img
          :src="'http://localhost:8080/uploads/users/' + user.picture"
          style="object-fit: cover"
          class="h-[30px] w-[30px] rounded-full"
          alt=""
        />
        <span class="text-[12px] font-semibold text-white">
          {{ user.name }}
        </span>
      </div>
      <div class="h-[1px] bg-[#fff]"></div>
      <div class="flex justify-start">
        <button @click="goToProfile" class="text-white">Data Diri</button>
      </div>
      <div>
        <button class="text-red-700" @click="authStore.logout()">Keluar</button>
      </div>
    </div>
  </nav>

  <div class="p-5">
    <slot />
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
    const toggleOpen = () => {
      open.value = !open.value;
    };
    const buka = ref(false);

    const ProfilOpen = () => {
      buka.value = !buka.value;
    };

    return {
      userStore: useUserStore(),
      authStore: useAuthStore(),
      open,
      toggleOpen,
      buka,
      ProfilOpen,
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
      if (role == 'Admin'){
        this.$router.push("/admin/menu/Semua")
      }
      else if (role == 'SPV Cars'){
        this.$router.push("/spv-mobil")
      }
      else if (role == 'SPV Roms'){
        this.$router.push("/spv-ruangan")
      }
      else if (role == 'Satpam'){
        this.$router.push("/satpam")
      }
    },
    goToProfile() {
      // Pindahkan ke halaman profil
      this.$router.push("/users/profile");
      // Tutup elemen v-show
      this.open = false;
    },
    goToNotification() {
      // Pindahkan ke halaman profil
      this.$router.push("/users/notifikasi");
      // Tutup elemen v-show
      this.open = false;
    },
  },
  components: { RouterLink },
};
</script>

<style>
.link {
  @apply px-2 cursor-pointer hover:text-red-400;
}
</style>
<style>
.link {
  @apply px-2 cursor-pointer hover:text-red-400;
}
</style>
