import { createRouter, createWebHashHistory, useRouter } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";
import { useUserStore } from '@/stores/user'

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
          meta: {
            public: false,
          },
        },
        {
          path: '/contracts',
          name: 'contracts',
          component: () => import('@/views/Contracts.vue'),
          meta: {
            public: false,
          },
        },
        {
          path: '/contract-detail/:id',
          name: 'contract-detail',
          component: () => import('@/views/Contract-detail.vue'),
          meta: {
            public: false,
          },
        },
      ],
    },
    {
      path: "/landing",
      name: "landing",
      component: () => import("@/views/pages/Landing.vue"),
      meta: {
        public: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/pages/auth/login.vue"),
      meta: {
        public: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/pages/auth/register.vue"),
      meta: {
        public: true,
      },
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("@/views/pages/auth/reset-password.vue"),
      meta: {
        public: true,
      },
    },
    {
      path: "/change-password",
      name: "change-password",
      component: () => import("@/views/pages/auth/change-password.vue"),
      meta: {
        public: false,
      },
    },
  ],
});

router.beforeEach(async (to) => {
  if (!to.meta.public) {
    const user = useUserStore()
    const router2 = useRouter()
    const token = await user.getToken()
    if (!token) router2.push('/landing')
  }
})

export default router;
