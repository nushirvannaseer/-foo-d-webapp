import { createRouter, createWebHistory } from "vue-router";
import LoginSignUp from "./components/LoginSignUp.vue";
import Posts from "./components/Posts.vue";
import Home from "./components/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/loginSignUp",
    component: LoginSignUp,
  },
  {
    path: "/posts",
    component: Posts,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;
