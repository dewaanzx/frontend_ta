<template>
  <!-- ini pembungkus -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-12">
    <!-- Materiald Informasi -->
    <div class="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
      <!-- bagian status pinjam material -->
      <div class="md:w-[80vw]">
        <span class="text-[18px] md:text-[24px]" style="line-height: 2em"
          >Material</span
        >
        <swiper
          :pagination="{
            dynamicBullets: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="material_transaction in materialTransactionStore.material_transactions"
          >
            <!-- materialdnya -->
            <div
              class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6"
            >
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <Span
                    class="text-[18px] md:text-[27px] font-semibold pb-3"
                    style="line-height: 1.2em"
                    >{{ material_transaction.destination }}
                  </Span>
                  <Span
                    class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
                  >
                    <img
                      src="../../assets/calender.png "
                      class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
                      alt=""
                    />
                    {{ material_transaction.date_start }}
                  </Span>
                  <Span
                    class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
                  >
                    <img
                      src="../../assets/time-line.png "
                      class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
                      alt=""
                    />
                    {{ material_transaction.time_start }}
                  </Span>
                </div>
                <!-- <div>
                  <button
                    class="w-[15.5vmin] md:px-5 md:py-[6px] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-lg"
                  >
                    {{ material_transaction.status }}
                  </button>
                </div> -->
              </div>
              <!-- rectangle -->
              <div class="h-[2px] bg-[#D9D9D9]"></div>
              <!-- tombol ambil -->
              <div class="h-[5vmin] flex flex-row justify-between items-center">
                <span
                  class="text-[11px] md:text-[12px]"
                  style="line-height: 1.2em"
                  >Material telah diambil</span
                >
                <RouterLink
                  class="p-1 md:px-4 md:py-2 bg-orange-400 hover:bg-orange-500 text-[10px] md:text-[14px] text-white rounded-[16px]"
                  :to="'/users/riwayat-ambil-material-detail/' + material_transaction.id"
                >
                  Detail
                </RouterLink>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- akhir materiald material -->
      </div>

      <!-- akhir materiald monitoring -->
	   
      <!-- akhir informasi -->
    </div>
    <!-- fitur -->
    <div class="flex justify-center items-center">
  <div class="grid grid-cols-2 md:grid-cols-3 gap-20 rounded-[18px] p-10">
    <!-- pinjam material -->
    <button
      class="w-[25vw] md:w-[15vw] bg-[#D3E86A] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
      @click="$router.push('/users/cekmaterial')"
    >
      <div
        class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#25282B] rounded-full flex justify-center items-center"
      >
        <img src="../../assets/plus.svg" alt="" />
      </div>
      <div class="w-[20vw] md:w-[10vw] h-[4vh]">
        <p class="text-[12px] md:text-[20px] leading-tight">
          Ambil Material
        </p>
      </div>
    </button>
    <!-- riwayat pinjam material -->
    <button
      class="w-[25vw] md:w-[15vw] bg-[#D3E86A] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
      @click="$router.push('/users/riwayat-ambil-material/Semua')"
    >
      <div
        class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#25282B] rounded-full flex justify-center items-center"
      >
        <img src="../../assets/pensil.svg" alt="" />
      </div>
      <div class="w-[20vw] h-[4vh] md:w-[10vw]">
        <p class="text-[12px] md:text-[20px] leading-tight">
          Riwayat Pengambilan
        </p>
      </div>
    </button>
    <!-- pinjam monitoring -->
    <button
      @click="$router.push('/users/monitoring')"
      class="w-[25vw] md:w-[15vw] bg-[#D3E86A] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
    >
      <div
        class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#25282B] rounded-full flex justify-center items-center"
      >
        <img src="../../assets/monitoring.svg" alt="" />
      </div>
      <div class="w-[20vw] md:w-[10vw] h-[4vh]">
        <p class="text-[12px] md:text-[20px] leading-tight">
          Monitoring Material
        </p>
      </div>
    </button>
  </div>
</div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useMaterialTransactionStore } from "../../stores/material_transaction.store";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
      },
    };
  },
  methods: {
    async create() {
      let material_transaction = await this.materialTransactionStore.add(this.formData);

      if (material_transaction) {
        this.$router.push("/users");
      }
    },
  },
  mounted() {
    this.materialTransactionStore.fetchByStatus("Diambil");
  },
};
</script>

<style>
.swiper {
  width: 95%;
  height: 90%;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
}
</style>