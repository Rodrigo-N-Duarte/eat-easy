import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignView from "../views/SignView.vue";
import LocalDetalheView from "@/views/LocalDetalheView.vue";
import PedidosView from "@/views/PedidosView.vue";
import ReservasView from "@/views/ReservasView.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "App",
    component: SignView,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/pedidos/:id",
    name: "pedidos",
    component: PedidosView,
  },
  {
    path: "/reservas",
    name: "reservas",
    component: ReservasView,
  },
  {
    path: "/sign",
    name: "sign",
    component: SignView,
  },
  {
    path: "/local/:id",
    name: "localDetalhe",
    component: LocalDetalheView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
