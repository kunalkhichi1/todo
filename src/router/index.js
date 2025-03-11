import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import AboutPage from "../views/About.vue";
import NotFound from "../views/NotFound.vue"; 

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
