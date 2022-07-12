import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // public routes
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/premium",
    name: "premium",
    component: () => import("../views/PremiumView.vue"),
  },
  {
    path: "/courses",
    name: "courses",
    component: () => import("../views/CoursesView.vue"),
  },
  {
    path: "/docs",
    name: "docs",
    component: () => import("../views/DocsView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/SignInView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUpView.vue"),
  },
  // Protected Route
  {
    path: "/dashboard/create-profile",
    name: "CreateProfile",
    component: () => import("../views/CreateProfileView.vue"),
  },
  // Not Found Route
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
