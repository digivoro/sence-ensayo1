import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: "/comentarios",
    name: "Comentarios",
    component: () =>
      import(/* webpackChunkName: "comentarios" */ "../views/Comentarios.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  let currentUser = await Firebase.auth().currentUser;

  if (!currentUser && to.meta.requiresAuth) {
    next("/");
  } else {
    next();
  }
});

export default router;
