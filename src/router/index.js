import { createRouter, createWebHashHistory } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/",
          name: "dashboard",
          component: () => import("@/views/Dashboard.vue"),
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/Profile.vue')
        },
        {
          path: '/contracts',
          name: 'contracts',
          component: () => import('@/views/Contracts.vue')
        },
        {
          path: '/contract-detail/:id',
          name: 'contract-detail',
          component: () => import('@/views/Contract-detail.vue')
        },
      ],
    },
    {
      path: "/landing",
      name: "landing",
      component: () => import("@/views/pages/Landing.vue"),
    },
    {
      path: "/pages/notfound",
      name: "notfound",
      component: () => import("@/views/pages/NotFound.vue"),
    },
    {
      path: "/auth/access",
      name: "accessDenied",
      component: () => import("@/views/pages/auth/Access.vue"),
    },
    {
      path: "/auth/error",
      name: "error",
      component: () => import("@/views/pages/auth/Error.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/pages/auth/login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/pages/auth/register.vue"),
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("@/views/pages/auth/reset-password.vue"),
    },
    {
      path: "/change-password",
      name: "change-password",
      component: () => import("@/views/pages/auth/change-password.vue"),
    },
  ],
});

export default router;
