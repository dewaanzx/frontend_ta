<template>
	<div
	class="overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen"
	style="background-color: #25282B;">
		<div
			class="login-container container w-full lg:w-full h-screen lg:h-screen-75 flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group" style="background-color: #25282B;">
			<div
				class="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
				<div class="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
				</div>
				<div
					class="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
					<img src="../../../assets/logreg.png" alt="product">
					<!-- product image -->
				</div>
				<div class="hidden lg:block w-1/3 ml-auto" style="background-color: #25282B;"></div>
			</div>
			<div class="w-full lg:w-1/2 order-1 lg:order-2">
				<div class="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
					<div class="w-full space-y-5">
						<!-- Logo -->
						<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
							<img src="../../../assets/logobiru.png" alt="Logo" style="width: 100px; height: auto;" />
						</div>
						<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
							<svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M30 36.6732V41.6732M17.5 25.4952C18.6785 25.4232 20.1315 25.4232 22 25.4232H38C39.8685 25.4232 41.3215 25.4232 42.5 25.4952M17.5 25.4952C16.0292 25.585 14.9857 25.7869 14.0951 26.2407C12.6839 26.9597 11.5365 28.1071 10.8175 29.5183C10 31.1226 10 33.2228 10 37.4232V40.9232C10 45.1236 10 47.2238 10.8175 48.8281C11.5365 50.2394 12.6839 51.3867 14.0951 52.1058C15.6994 52.9232 17.7996 52.9232 22 52.9232H38C42.2004 52.9232 44.3006 52.9232 45.9049 52.1058C47.3161 51.3867 48.4635 50.2394 49.1825 48.8281C50 47.2238 50 45.1236 50 40.9232V37.4232C50 33.2228 50 31.1226 49.1825 29.5183C48.4635 28.1071 47.3161 26.9597 45.9049 26.2407C45.0143 25.7869 43.9708 25.585 42.5 25.4952M17.5 25.4952V20.4232C17.5 13.5197 23.0964 7.92322 30 7.92322C36.9036 7.92322 42.5 13.5197 42.5 20.4232V25.4952"
									stroke="#D3E86A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
						<div class="text-center">
							<p class="text-lg font-bold text-white">Sukses Ubah Password</p>
						</div>
						<form action="" @submit.prevent="login">
							<div class="flex flex-col text-center">
								<label for="email" class="font-medium text-[12px] text-white mb-2">
									<i class="fa fa-user-circle-o"></i> Password berhasil diubah, silahkan masuk kembali
								</label>
							</div>
							<br>
							<button @click="$router.push('/login')"
								class="transition p-3 w-full bg-orange-500 hover:bg-blue-600 text-white rounded-lg mb-4">
								Masuk <i class="fa fa-send"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
  
<style></style>
  
<script>
import {
	useAuthStore
} from "@/stores/auth.store.js"

export default {
	data() {
		return {
			authStore: useAuthStore(),
			formData: {
				email: "",
				password: "",
			}
		}
	},
	methods: {
		login() {
			this.authStore.login(this.formData)
		}
	}
}
</script>
  