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
									d="M52.5 7.92322C53.8807 7.92322 55 9.04252 55 10.4232V50.4397C55 51.8112 53.8617 52.9232 52.5205 52.9232H7.4795C6.11013 52.9232 5 51.811 5 50.4397V47.9232H50V18.6732L30 36.6732L5 14.1732V10.4232C5 9.04252 6.1193 7.92322 7.5 7.92322H52.5ZM20 37.9232V42.9232H0V37.9232H20ZM12.5 25.4232V30.4232H0V25.4232H12.5ZM48.9148 12.9232H11.0854L30 29.9465L48.9148 12.9232Z"
									fill="#D3E86A" />
							</svg>
						</div>
						<div class="text-center">
							<p class="text-lg font-bold text-white">Verifikasi Dikirim</p>
						</div>
						<form action="" @submit.prevent="login">
							<div class="flex flex-col text-center">
								<label for="email" class="font-medium text-[12px] text-white mb-2">
									<i class="fa fa-user-circle-o"></i> Cek emailmu sekarang untuk melakukan reset password
								</label>
							</div>
							<button @click="$router.push('/login')"
								class="transition p-2 w-full bg-orange-500 hover:bg-blue-600 text-white rounded-lg mb-3">
								Kembali <i class="fa fa-send"></i>
							</button>
							<br>
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
  