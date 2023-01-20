import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodDetail from "../views/FoodDetail.vue";
import KeranjangView from "../views/KeranjangView.vue";
import PesanSuccess from "../views/PesanSuccess.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/food/:id",
      name: "foodDetail",
      component: FoodDetail,
    },
    {
      path: "/keranjang",
      name: "keranjang",
      component: KeranjangView,
    },
    {
      path: "/pesan-sukses",
      name: "pesanSukses",
      component: PesanSuccess,
    },
    {
      path: "/foods",
      name: "foods",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FoodsView.vue"),
    },
  ],
});

export default router;
