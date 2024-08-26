import UsersTelkom from "../views/users/index.vue";

import UsersCekMaterial from "../views/users/AmbilMaterial/cekmaterial.vue";
import UsersAmbilMaterial from "../views/users/AmbilMaterial/ambilmaterial.vue";

import UsersPengajuanMaterial from "../views/users/AmbilMaterial/pengajuanmaterial.vue";
import UsersDetailPengajuanMaterial from "../views/users/AmbilMaterial/detailpengajuanmaterial.vue";
import UsersRiwayatMaterial from "../views/users/AmbilMaterial/riwayatambilmaterial.vue";
import UsersRiwayatAmbilMaterialDetail from "../views/users/AmbilMaterial/riwayatambilmaterialDetail.vue";

import UsersProfile from "../views/users/Profile/profile.vue";
import UsersEditProfile from "../views/users/Profile/EditProfile.vue";
import UsersGantiPassword from "../views/users/Profile/GantiPassword.vue";
import UsersInformasi from "../views/users/Profile/Informasi.vue";
import UsersNotifikasi from "../views/users/notifikasi.vue";

import UsersMonitoring from "../views/users/Monitoring/monitoring.vue";

import ExampleLayout from "@/layouts/ExampleLayout.vue";
import NavbarTelkom from "../layouts/Navbar.vue";

// middleware
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
  {
    path: "/users",
    name: "users",
    component: UsersTelkom,
    meta: {
      title: "Main Menu",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/pengajuanmaterial/:id",
    name: "users.pengajuanmaterial",
    component: UsersPengajuanMaterial,
    meta: {
      title: "User Pengajuan Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/cekmaterial",
    name: "users.cekmaterial",
    component: UsersCekMaterial,
    meta: {
      title: "User Cek Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/detail-pengajuan-material",
    name: "users.detailpengajuanmaterial",
    component: UsersDetailPengajuanMaterial,
    meta: {
      title: "Detail Pengajuan Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-ambil-material/:status",
    name: "users.riwayatambilmaterial",
    component: UsersRiwayatMaterial,
    meta: {
      title: "Riwayat Pinjam Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-ambil-material-detail/:id",
    name: "users.detail-pinjam-material",
    component: UsersRiwayatAmbilMaterialDetail,
    meta: {
      title: "Detail Pinjam Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/profile",
    name: "users.profile",
    component: UsersProfile,
    meta: {
      title: "Profile",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/edit-profile",
    name: "users.editprofil",
    component: UsersEditProfile,
    meta: {
      title: "Edit Profil",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/ganti-password",
    name: "users.gantipassword",
    component: UsersGantiPassword,
    meta: {
      title: "Ganti Password",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/informasi",
    name: "users.informasi",
    component: UsersInformasi,
    meta: {
      title: "Informasi",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/notifikasi",
    name: "users.notifikasi",
    component: UsersNotifikasi,
    meta: {
      title: "Notifikasi",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/ambil-material/:id",
    name: "users.ambil.material",
    component: UsersAmbilMaterial,
    meta: {
      title: "Ambil Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/monitoring",
    name: "users.monitoring",
    component: UsersMonitoring,
    meta: {
      title: "Monitoring",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
];
