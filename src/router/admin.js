import NavbarAdmin from "../layouts/NavbarAdmin.vue";
import SidebarAdmin from "../layouts/Sidebar.vue";
import AuthMiddleware from "@/middleware/auth.middleware.js";

import ViewMenu from "../views/admin/menu/mainmenu.vue";
import TambahBarang from "../views/admin/menu/tambahbarang.vue";
import EditBarang from "../views/admin/menu/editbarang.vue";
import DetailBarang from "../views/admin/menu/detailbarang.vue";

import ViewKonfirmasi from "../views/admin/konfirmasi/index.vue";
import Konfirmasi from "../views/admin/konfirmasi/konfirmasi.vue";

import ViewReport from "../views/admin/report/report.vue";

import MasterMaterial from "../views/admin/master-material/index.vue";
import TambahMaterial from "../views/admin/master-material/tambahmaterial.vue";
import DetailMaterial from "../views/admin/master-material/detailmaterial.vue";
import EditMaterial from "../views/admin/master-material/editmaterial.vue";

import MasterPegawai from "../views/admin/master-pegawai/index.vue";
import DetailPegawai from "../views/admin/master-pegawai/detailpegawai.vue";

import MasterDivisi from "../views/admin/master-divisi/index.vue";
import TambahDivisi from "../views/admin/master-divisi/tambahdivisi.vue";
import EditDivisi from "../views/admin/master-divisi/editdivisi.vue";

export default [
  {
    path: "/admin/menu/:status",
    name: "Admin-main-menu",
    component: ViewMenu,
    meta: {
      title: "Menu",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/menu/tambah",
    name: "Admin-tambah-barang",
    component: TambahBarang,
    meta: {
      title: "Tambah Barang",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/menu/edit/:id",
    name: "Admin-edit-menu",
    component: EditBarang,
    meta: {
      title: "Edit Barang",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/menu/detail/:id",
    name: "Admin-detail-barang",
    component: DetailBarang,
    meta: {
      title: "Detail Barang",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/konfirmasi",
    name: "PageKonfirmasi",
    component: ViewKonfirmasi,
    meta: {
      title: "Konfirmasi",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/konfirmasi/konfirmasi/:id",
    name: "Konfirmasi",
    component: Konfirmasi,
    meta: {
      title: "Konfirmasi",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/report",
    name: "PageReport",
    component: ViewReport,
    meta: {
      title: "Report",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-material/",
    name: "MasterMaterial",
    component: MasterMaterial,
    meta: {
      title: "Master Material",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-material/tambah",
    name: "TambahMaterial",
    component: TambahMaterial,
    meta: {
      title: "Tambah Material",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-material/detail/:id",
    name: "DetailMaterial",
    component: DetailMaterial,
    meta: {
      title: "Detail Material",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-material/edit/:id",
    name: "EditMaterial",
    component: EditMaterial,
    meta: {
      title: "Edit Material",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-pegawai/",
    name: "MasterPegawai",
    component: MasterPegawai,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-pegawai/detail/:id",
    name: "DetailPegawai",
    component: DetailPegawai,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-divisi/",
    name: "MasterDivisi",
    component: MasterDivisi,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-divisi/tambah",
    name: "TambahDivisi",
    component: TambahDivisi,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-divisi/edit/:id",
    name: "EditDivisi",
    component: EditDivisi,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
];
