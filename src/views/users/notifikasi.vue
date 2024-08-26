<template>
  <SECtion class="w-[80%] mx-auto flex flex-col gap-8">
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
              >Notifikasi</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <!-- ini bagian notifikasi -->
    <article class="flex flex-col gap-3">
      <div v-for="notification in notificationStore.notifications">
        <RouterLink
          :to="
            '/users/riwayat-ambil-material-detail/' + notification.transaction_id
          "
        >
          <div
            class="bg-[#ECF8FF] p-4 md:p-9 rounded-xl text-[11px] flex flex-row gap-4 md:gap-9 shadow-sm hover:bg-blue-100"
          >
            <div
              class="bg-[#0C6898] rounded-full p-3 flex justify-center items-center"
            >
              <img
                src="../../assets/wire.svg"
                alt=""
                class="w-[2vmax] h-[2vmax]"
              />
            </div>
            <div class="flex flex-col gap-1 no-wrap">
              <P style="line-height: 1.2em" class="md:text-[16px]">{{
                notification.notification
              }}</P>
              <p class="text-[9px] md:text-[14px] text-[#404040]">
                {{ notification.timeago }}
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
    </article>
  </SECtion>
</template>
<script>
import { useNotificationStore } from "../../stores/notification.store";

export default {
  data() {
    return {
      notificationStore: useNotificationStore(),
    };
  },
  mounted() {
    this.notificationStore.fetch();
  },
};
</script>